import AVFoundation
import MediaPlayer
import Observation
import UIKit

enum Feedback: String, CaseIterable {
    case moreLikeThis, notThisMood, lessVocals, moreEnergy, favorite
    var title: String {
        switch self {
        case .moreLikeThis: "More like this"
        case .notThisMood: "Not this mood"
        case .lessVocals: "Less vocals"
        case .moreEnergy: "More energy"
        case .favorite: "Favorite"
        }
    }
    var icon: String {
        switch self {
        case .moreLikeThis: "plus.circle"
        case .notThisMood: "hand.thumbsdown"
        case .lessVocals: "mic.slash"
        case .moreEnergy: "bolt"
        case .favorite: "heart"
        }
    }
}

private struct Persisted: Codable {
    var modes: [Mode]
    var activeID: UUID?
    var settings: AppSettings
    var rated: [String]
}

@MainActor @Observable
final class AppModel {
    let catalog: Catalog
    var modes: [Mode] = []
    var activeID: UUID?
    var settings = AppSettings() { didSet { scheduleSave() } }

    var current: QueueItem?
    var upNext: [QueueItem] = []
    var currentArt: UIImage?
    var resolved: [String: Resolved] = [:]
    var isPlaying = false
    var progress = 0.0
    var duration = 0.0
    var loading = false
    var toast: String?
    var askRating = false
    var favorites: Set<String> = []

    @ObservationIgnored private let player = AVPlayer()
    @ObservationIgnored private var rng = SystemRandomNumberGenerator()
    @ObservationIgnored private var saveTask: Task<Void, Never>?
    @ObservationIgnored private var toastTask: Task<Void, Never>?
    @ObservationIgnored private var artTask: Task<Void, Never>?
    @ObservationIgnored private var rated = Set<String>()
    @ObservationIgnored private var sinceRating: [String: Int] = [:]
    @ObservationIgnored private let dupKey: [String]
    @ObservationIgnored private var unplayable = Set<Int>()
    @ObservationIgnored private var artCache: [URL: UIImage] = [:]
    @ObservationIgnored private var externalResolved: [String: Resolved] = [:]
    @ObservationIgnored private var hotOrder: [Int] = []

    private static var stateURL: URL {
        let dir = try! FileManager.default.url(for: .applicationSupportDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
        return dir.appendingPathComponent("state.plist")
    }
    static var eventsURL: URL { URL.documentsDirectory.appending(path: "events.jsonl") }

    var onboarded: Bool { !settings.languages.isEmpty }
    var activeIndex: Int? { modes.firstIndex { $0.id == activeID } }
    var activeMode: Mode? { activeIndex.map { modes[$0] } }

    init() throws {
        catalog = try Catalog()
        dupKey = catalog.items.map { ($0.title + "|" + ($0.artist.split(separator: ",").first.map(String.init) ?? "")).lowercased() }
        if let data = try? Data(contentsOf: Self.stateURL), let s = try? PropertyListDecoder().decode(Persisted.self, from: data) {
            modes = s.modes.filter { $0.learner.dim == catalog.dim }
            activeID = s.activeID; settings = s.settings; rated = Set(s.rated)
        }
        if let k = catalog.attrIndex("hot") {
            hotOrder = (0..<catalog.count).filter { catalog.attrs[$0 * catalog.attrDim + k] > 150 }
                .sorted { catalog.attrs[$0 * catalog.attrDim + k] > catalog.attrs[$1 * catalog.attrDim + k] }
        }
        try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .default)
        try? AVAudioSession.sharedInstance().setActive(true)
        player.addPeriodicTimeObserver(forInterval: CMTime(seconds: 0.5, preferredTimescale: 600), queue: .main) { [weak self] t in
            MainActor.assumeIsolated {
                guard let self else { return }
                self.progress = max(0, t.seconds)
                if self.duration <= 0, let d = self.player.currentItem?.duration.seconds, d.isFinite { self.duration = d }
            }
        }
        NotificationCenter.default.addObserver(forName: .AVPlayerItemDidPlayToEndTime, object: nil, queue: .main) { [weak self] _ in
            MainActor.assumeIsolated { self?.advance(.completed) }
        }
        let rc = MPRemoteCommandCenter.shared()
        rc.playCommand.addTarget { [weak self] _ in MainActor.assumeIsolated { self?.togglePlay(); return .success } }
        rc.pauseCommand.addTarget { [weak self] _ in MainActor.assumeIsolated { self?.togglePlay(); return .success } }
        rc.nextTrackCommand.addTarget { [weak self] _ in MainActor.assumeIsolated { self?.advance(.skipped); return .success } }
    }

    // MARK: Onboarding & modes

    func finishOnboarding(languages: [String]) {
        settings.languages = languages
        if modes.isEmpty { select(createMode(name: "For You", template: .forYou)) }
    }

    /// The starting nudge for a new mode: what is hot right now in the listener's languages, plus the template's character.
    /// All of it goes through the same steering mechanism as the chips, so listening can unlearn any of it.
    private func initialSteps(for t: Template) -> [SteerStep] {
        var steps = t.prior
        steps.append(.init(attr: "hot", dir: t == .forYou ? 2 : 1))
        steps.append(.init(attr: "recent", dir: t == .forYou ? 1 : 0.5))
        for l in settings.languages { steps.append(.init(attr: "lang:" + l, dir: 2, strength: 4)) }
        return steps
    }

    @discardableResult
    func createMode(name: String, template: Template) -> UUID {
        var mode = Mode(name: name.trimmingCharacters(in: .whitespaces).isEmpty ? template.title : name, template: template,
                        hue: template == .forYou ? 0.97 : Double.random(in: 0..<1), learner: Learner(dim: catalog.dim))
        for s in initialSteps(for: template) { steer(&mode, s, strength: settings.steerStrength * 0.5) }
        modes.append(mode)
        log("mode_created", mode: mode, note: template.rawValue)
        scheduleSave()
        return mode.id
    }

    func deleteMode(_ id: UUID) {
        if activeID == id { stopPlayback(); activeID = nil }
        modes.removeAll { $0.id == id }
        scheduleSave()
    }

    func resetMode(_ id: UUID) {
        guard let i = modes.firstIndex(where: { $0.id == id }) else { return }
        var m = modes[i]
        m.learner = Learner(dim: catalog.dim); m.banned = []; m.recent = []; m.liked = []; m.plays = 0; m.skips = 0; m.likes = 0
        for s in initialSteps(for: m.template) { steer(&m, s, strength: settings.steerStrength * 0.5) }
        modes[i] = m; log("mode_reset", mode: m); scheduleSave()
        if activeID == id { rebuildUpNext() }
    }

    func select(_ id: UUID) {
        guard modes.contains(where: { $0.id == id }) else { return }
        if activeID == id, current != nil { return }
        if current != nil { closeCurrent(.switched) }
        activeID = id; current = nil; upNext = []
        if let m = activeMode { log("mode_selected", mode: m) }
        scheduleSave()
        Task { await startFresh() }
    }

    // MARK: Steering & feedback

    private func steer(_ mode: inout Mode, _ step: SteerStep, strength: Double) {
        guard let k = catalog.attrIndex(step.attr) else { return }
        var t = [Float](repeating: 0, count: catalog.dim)
        t[catalog.attrStart + k] = Float(step.dir * 0.5 / Double(catalog.attrDim).squareRoot())
        mode.learner.observe(t, y: 1, weight: Float(strength * step.strength))
    }

    private func apply(_ steps: [SteerStep], label: String) {
        guard let i = activeIndex else { return }
        for s in steps { steer(&modes[i], s, strength: settings.steerStrength) }
        rebuildUpNext(); flash(label); scheduleSave()
    }

    func feedback(_ f: Feedback) {
        guard let i = activeIndex, let cur = current else { return }
        let m = modes[i]
        let id = cur.index >= 0 ? catalog.items[cur.index].id : nil
        switch f {
        case .moreLikeThis, .favorite:
            if let id { favorites.insert(id) } else if let e = cur.ext { favorites.insert("x:" + e.id) }
            if cur.index >= 0 {
                observe(modeIndex: i, item: cur.index, y: 1, weight: f == .favorite ? 4 : 3)
                modes[i].likes += 1; modes[i].liked.append(catalog.items[cur.index].id)
                rebuildUpNext()
                flash(f == .favorite ? "Added to Favorites" : "More like this — updated Up Next")
            } else { flash("Added to Favorites") }
        case .notThisMood:
            if cur.index >= 0 {
                observe(modeIndex: i, item: cur.index, y: 0, weight: 3)
                modes[i].banned.append(catalog.items[cur.index].id)
            }
            log("chip_notThisMood", mode: m, song: id); flash("Got it — not for \(m.name)")
            advance(.rejected); return
        case .lessVocals: apply([.init(attr: "voice", dir: -1.5)], label: "Less vocals — updated Up Next")
        case .moreEnergy: apply([.init(attr: "arousal", dir: 1.5), .init(attr: "tempo", dir: 0.5)], label: "More energy — updated Up Next")
        }
        log("chip_\(f.rawValue)", mode: m, song: id)
        scheduleSave()
    }

    func isFavorite(_ item: QueueItem?) -> Bool {
        guard let item else { return false }
        return favorites.contains(item.index >= 0 ? catalog.items[item.index].id : "x:" + (item.ext?.id ?? ""))
    }

    private func observe(modeIndex i: Int, item: Int, y: Double, weight: Double) {
        modes[i].learner.observe(Array(catalog.vector(item)), y: Float(y), weight: Float(weight))
    }

    // MARK: Recommendation

    func rank(mode: Mode, count: Int, excluding: Set<Int>) -> [QueueItem] {
        let n = catalog.count, d = catalog.dim
        let w = mode.learner.weights(sigma: settings.explore, using: &rng)
        let wf = w.map(Float.init)
        var scores = [Float](repeating: 0, count: n)
        catalog.features.withUnsafeBufferPointer { fp in
            wf.withUnsafeBufferPointer { wp in
                for i in 0..<n {
                    var s: Float = 0; let base = i * d
                    for j in 0..<d { s += fp[base + j] * wp[j] }
                    scores[i] = s
                }
            }
        }
        let banned = Set(mode.banned.compactMap { catalog.indexByID[$0] })
        var blockedKeys = Set(mode.recent.suffix(300).compactMap { catalog.indexByID[$0] }.map { dupKey[$0] })
        for e in excluding { blockedKeys.insert(dupKey[e]) }
        let order = (0..<n).filter { !banned.contains($0) && !unplayable.contains($0) && !blockedKeys.contains(dupKey[$0]) }
            .sorted { scores[$0] > scores[$1] }
        var out: [QueueItem] = []
        var prevArtist = artist(of: current?.index ?? upNext.last?.index)
        var keys = blockedKeys
        for i in order {
            if out.count >= count { break }
            let a = artist(of: i)
            if a == prevArtist, !a.isEmpty { continue }          // never the same artist back to back
            if !keys.insert(dupKey[i]).inserted { continue }
            out.append(QueueItem(index: i, why: why(i, w: w, mode: mode)))
            prevArtist = a
        }
        return out
    }

    private func artist(of i: Int?) -> String {
        guard let i, i >= 0 else { return "" }
        return catalog.items[i].artist.split(separator: ",").first.map { String($0).trimmingCharacters(in: .whitespaces) } ?? ""
    }

    private static let phrases: [String: (hi: String, lo: String)] = [
        "voice": ("Vocal-forward", "Mostly instrumental"), "danceable": ("Danceable", "Not for dancing"), "happy": ("Uplifting", "Moodier"),
        "sad": ("Melancholic", "Brighter"), "relaxed": ("Relaxed", "More driven"), "party": ("Party energy", "Laid-back"),
        "acoustic": ("Acoustic", "More produced"), "electronic": ("Electronic", "More organic"), "arousal": ("High energy", "Calm"),
        "valence": ("Positive", "Darker"), "tempo": ("Fast", "Slow"), "hot": ("Hot right now", "Deep cut"), "recent": ("New", "Classic")
    ]

    private func why(_ i: Int, w: [Double], mode: Mode) -> String {
        let base = catalog.attrStart
        var best: (Int, Double)?
        for k in 0..<catalog.attrDim where !catalog.attrNames[k].hasPrefix("lang:") {
            let c = w[base + k] * Double(catalog.features[i * catalog.dim + base + k])
            if c > (best?.1 ?? 0.04) { best = (k, c) }
        }
        if let (k, _) = best, let p = Self.phrases[catalog.attrNames[k]] {
            return Double(catalog.features[i * catalog.dim + base + k]) > 0 ? p.hi : p.lo
        }
        var top: (Int, Float)?
        for id in mode.liked.suffix(40) {
            guard let j = catalog.indexByID[id] else { continue }
            var s: Float = 0
            for d in 0..<base { s += catalog.features[i * catalog.dim + d] * catalog.features[j * catalog.dim + d] }
            if s > (top?.1 ?? 0.3) { top = (j, s) }
        }
        if let (j, _) = top { return "Like “\(catalog.items[j].title)”" }
        return "Fits \(mode.name)"
    }

    /// What the mode currently prefers, as −1…+1 per attribute, read from the learned weights.
    func dna(_ id: UUID) -> [(name: String, value: Double)] {
        guard let m = modes.first(where: { $0.id == id }) else { return [] }
        let (w, _) = m.learner.solve()
        let unit = 0.5 / Double(catalog.attrDim).squareRoot()
        return catalog.attrNames.enumerated().map { ($1, tanh(w[catalog.attrStart + $0] * unit * 4)) }
    }

    /// The currently hottest songs in the listener's languages.
    func hotNow(limit: Int) -> [Int] {
        let langs = Set(settings.languages)
        var seen = Set<String>(), out: [Int] = []
        for i in hotOrder where langs.isEmpty || langs.contains(catalog.items[i].lang) {
            if seen.insert(dupKey[i]).inserted { out.append(i) }
            if out.count >= limit { break }
        }
        return out
    }

    func rebuildUpNext() {
        guard let m = activeMode else { return }
        upNext = rank(mode: m, count: 6, excluding: Set([current?.index].compactMap { $0 }.filter { $0 >= 0 }))
        prefetch()
    }

    private func refill() {
        guard let m = activeMode, upNext.count < 5 else { return }
        let ex = Set((upNext.map(\.index) + [current?.index].compactMap { $0 }).filter { $0 >= 0 })
        upNext += rank(mode: m, count: 6 - upNext.count, excluding: ex)
        prefetch()
    }

    // MARK: Artwork

    func artURL(_ i: Int) -> URL? {
        let c = catalog.items[i]
        if !c.img.isEmpty { return URL(string: c.img) }
        return resolved[c.id]?.image
    }

    func artURL(_ q: QueueItem) -> URL? { q.index >= 0 ? artURL(q.index) : q.ext?.image }

    /// Fetches artwork URLs for songs the catalog has no image for (older entries), so lists can show covers.
    func ensureArtwork(for indices: [Int]) {
        let ids = indices.filter { catalog.items[$0].img.isEmpty && resolved[catalog.items[$0].id] == nil }.map { catalog.items[$0].id }
        guard !ids.isEmpty else { return }
        Task {
            if let got = try? await SaavnAPI.resolve(ids: Array(ids.prefix(20)), baseURL: settings.baseURL, highQuality: settings.highQuality) {
                for (k, v) in got { resolved[k] = v }
            }
        }
    }

    private func loadArt(for item: QueueItem) {
        artTask?.cancel()
        artTask = Task {
            var url = artURL(item)
            if url == nil, item.index >= 0 { url = resolved[catalog.items[item.index].id]?.image }
            guard let url else { currentArt = nil; return }
            if let hit = artCache[url] { currentArt = hit; return }
            if let (data, _) = try? await URLSession.shared.data(from: url), let img = UIImage(data: data), !Task.isCancelled {
                artCache[url] = img; currentArt = img
            }
        }
    }

    // MARK: Playback

    private func prefetch() {
        let ids = upNext.prefix(3).filter { $0.index >= 0 }.map { catalog.items[$0.index].id }.filter { resolved[$0] == nil }
        guard !ids.isEmpty else { return }
        Task {
            if let got = try? await SaavnAPI.resolve(ids: ids, baseURL: settings.baseURL, highQuality: settings.highQuality) {
                for (k, v) in got { resolved[k] = v }
            }
        }
    }

    private func startFresh() async {
        rebuildUpNext()
        await playHead()
    }

    private func playHead() async {
        guard !upNext.isEmpty else { return }
        await start(upNext.removeFirst())
    }

    private func start(_ item: QueueItem) async {
        loading = true; current = item; progress = 0; duration = 0; currentArt = nil; loadArt(for: item)
        let r: Resolved?
        if item.index >= 0 {
            let id = catalog.items[item.index].id
            if resolved[id] == nil, let got = try? await SaavnAPI.resolve(ids: [id], baseURL: settings.baseURL, highQuality: settings.highQuality) {
                for (k, v) in got { resolved[k] = v }
            }
            r = resolved[id]
        } else { r = item.ext.flatMap { externalResolved[$0.id] } }
        guard let r else {
            if item.index >= 0 { unplayable.insert(item.index) }
            loading = false; flash("Couldn’t load that one — skipping"); current = nil; refill(); await playHead(); return
        }
        duration = r.duration
        player.replaceCurrentItem(with: AVPlayerItem(url: r.url)); player.play()
        isPlaying = true; loading = false
        loadArt(for: item)
        updateNowPlaying(item)
        refill()
    }

    /// The listener picked a specific catalog song: play it now and carry on in the current mode.
    func play(index i: Int) {
        guard let mi = activeIndex ?? modes.indices.first else { return }
        if activeID == nil { activeID = modes[mi].id }
        if current != nil { closeCurrent(.switched) }
        observe(modeIndex: mi, item: i, y: 1, weight: 2)
        log("picked", mode: modes[mi], song: catalog.items[i].id)
        upNext = []
        Task { await start(QueueItem(index: i, ext: nil, why: "You picked this")); rebuildUpNext() }
    }

    func play(hit: SaavnAPI.Hit) {
        guard let mi = activeIndex ?? modes.indices.first else { return }
        if activeID == nil { activeID = modes[mi].id }
        if let ci = catalog.indexByID[hit.song.id] { resolved[hit.song.id] = hit.resolved; play(index: ci); return }
        if current != nil { closeCurrent(.switched) }
        externalResolved[hit.song.id] = hit.resolved
        log("picked_external", mode: modes[mi], song: hit.song.id)
        upNext = []
        Task { await start(QueueItem(index: -1, ext: hit.song, why: "You picked this")); rebuildUpNext() }
    }

    func togglePlay() {
        if isPlaying { player.pause() } else { player.play() }
        isPlaying.toggle()
    }

    func seek(to fraction: Double) {
        guard duration > 0 else { return }
        player.seek(to: CMTime(seconds: duration * fraction, preferredTimescale: 600))
        progress = duration * fraction
    }

    func restartOrPrevious() { seek(to: 0) }
    func skip() { advance(.skipped) }

    enum CloseReason { case completed, skipped, rejected, switched }

    func advance(_ reason: CloseReason) {
        closeCurrent(reason)
        Task { await playHead() }
    }

    private func stopPlayback() { player.pause(); player.replaceCurrentItem(with: nil); isPlaying = false; current = nil; upNext = [] }

    private func closeCurrent(_ reason: CloseReason) {
        guard let cur = current, let i = activeIndex else { return }
        let frac = duration > 0 ? min(1, progress / duration) : 0
        let m = modes[i]
        guard cur.index >= 0 else { log("external_\(reason)", mode: m, song: cur.ext?.id, frac: frac); return }
        let id = catalog.items[cur.index].id
        switch reason {
        case .completed:
            observe(modeIndex: i, item: cur.index, y: 1, weight: 1); modes[i].plays += 1
            log("completed", mode: m, song: id, frac: 1)
        case .skipped:
            observe(modeIndex: i, item: cur.index, y: frac, weight: 1); modes[i].skips += 1
            log("skipped", mode: m, song: id, frac: frac)
        case .rejected: modes[i].skips += 1
        case .switched: log("switched_away", mode: m, song: id, frac: frac)
        }
        modes[i].recent.append(id)
        if modes[i].recent.count > 600 { modes[i].recent.removeFirst(200) }
        if reason != .switched {
            let key = m.id.uuidString
            sinceRating[key, default: 0] += 1
            if sinceRating[key]! >= 8, !rated.contains(key) { askRating = true }
        }
        scheduleSave()
    }

    func rate(_ score: Int) {
        askRating = false
        guard let m = activeMode else { return }
        rated.insert(m.id.uuidString)
        log("rating", mode: m, note: "\(score)")
        scheduleSave()
    }

    func title(_ q: QueueItem) -> String { q.index >= 0 ? catalog.items[q.index].title : (q.ext?.title ?? "") }
    func artist(_ q: QueueItem) -> String { q.index >= 0 ? catalog.items[q.index].artist : (q.ext?.artist ?? "") }

    private func updateNowPlaying(_ item: QueueItem) {
        MPNowPlayingInfoCenter.default().nowPlayingInfo = [MPMediaItemPropertyTitle: title(item), MPMediaItemPropertyArtist: artist(item),
                                                          MPMediaItemPropertyPlaybackDuration: duration]
    }

    // MARK: Logging & persistence

    func flash(_ text: String) {
        toast = text
        toastTask?.cancel()
        toastTask = Task { try? await Task.sleep(for: .seconds(2.4)); if !Task.isCancelled { toast = nil } }
    }

    func log(_ type: String, mode: Mode, song: String? = nil, frac: Double? = nil, note: String? = nil) {
        let enc = JSONEncoder(); enc.dateEncodingStrategy = .iso8601
        guard var line = try? enc.encode(EventRecord(mode: mode.name, type: type, song: song, frac: frac, note: note)) else { return }
        line.append(10)
        if let h = try? FileHandle(forWritingTo: Self.eventsURL) { h.seekToEndOfFile(); h.write(line); try? h.close() }
        else { try? line.write(to: Self.eventsURL) }
    }

    func scheduleSave() {
        saveTask?.cancel()
        saveTask = Task { [weak self] in
            try? await Task.sleep(for: .seconds(1.5))
            guard !Task.isCancelled, let self else { return }
            let s = Persisted(modes: modes, activeID: activeID, settings: settings, rated: Array(rated))
            let enc = PropertyListEncoder(); enc.outputFormat = .binary
            if let data = try? enc.encode(s) { try? data.write(to: Self.stateURL, options: .atomic) }
        }
    }

    func resetEverything() {
        stopPlayback(); modes = []; activeID = nil; rated = []; settings.languages = []
        try? FileManager.default.removeItem(at: Self.eventsURL); scheduleSave()
    }
}
