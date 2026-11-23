import LNPopupUI
import SwiftUI

/// The expanded player. Quiet by default — the song, the scrubber, the transport — with the four things worth saying
/// out loud as one tidy row, and Up Next one tap away.
struct PlayerView: View {
    @Environment(AppModel.self) private var model
    @State private var showQueue = false
    @State private var scrubbing: Double?
    @State private var favoriteTick = 0

    var body: some View {
        let item = model.current
        ZStack {
            background
            VStack(spacing: 0) {
                topBar.padding(.top, 56)
                Spacer(minLength: 12)
                artwork
                Spacer(minLength: 18)
                titleBlock(item)
                scrubber.padding(.top, 14)
                transport.padding(.top, 10)
                Spacer(minLength: 14)
                feedbackRow
                RatingCard().padding(.top, 14)
                Spacer(minLength: 20)
            }
            .padding(.horizontal, 28)
            VStack { Spacer(); ToastView(text: model.toast).padding(.bottom, 34) }
        }
        .animation(.spring(duration: 0.4), value: model.toast)
        .animation(.snappy, value: model.askRating)
        .foregroundStyle(.white)
        .sheet(isPresented: $showQueue) { UpNextView().presentationDetents([.medium, .large]) }
        .sensoryFeedback(.success, trigger: favoriteTick)
        .popupItem {
            PopupItem(id: item?.id ?? "none", verbatimTitle: item.map(model.title) ?? "Finding something for you…",
                      verbatimSubtitle: item.map(model.artist) ?? "", image: Image(uiImage: model.currentArt ?? Self.placeholder),
                      progress: model.duration > 0 ? Float(min(1, model.progress / model.duration)) : 0) {
                ToolbarItemGroup(placement: .popupBar) {
                    Button { model.togglePlay() } label: { Image(systemName: model.isPlaying ? "pause.fill" : "play.fill") }
                    Button { model.skip() } label: { Image(systemName: "forward.fill") }
                }
            }
        }
    }

    static let placeholder: UIImage = {
        let size = CGSize(width: 120, height: 120)
        return UIGraphicsImageRenderer(size: size).image { ctx in
            UIColor.secondarySystemFill.setFill(); ctx.fill(CGRect(origin: .zero, size: size))
            let cfg = UIImage.SymbolConfiguration(pointSize: 48, weight: .regular)
            UIImage(systemName: "music.note", withConfiguration: cfg)?.withTintColor(.tertiaryLabel, renderingMode: .alwaysOriginal)
                .draw(at: CGPoint(x: 36, y: 34))
        }
    }()

    // MARK: Pieces

    private var background: some View {
        ZStack {
            Color.black
            if let art = model.currentArt {
                Image(uiImage: art).resizable().scaledToFill().blur(radius: 80).opacity(0.75).transition(.opacity)
            } else if let m = model.activeMode {
                modeGradient(m.hue).opacity(0.6)
            }
            LinearGradient(colors: [.black.opacity(0.1), .black.opacity(0.55)], startPoint: .top, endPoint: .bottom)
        }
        .ignoresSafeArea().animation(.easeInOut(duration: 0.6), value: model.currentArt)
    }

    private var topBar: some View {
        HStack {
            Menu {
                ForEach(model.modes) { m in
                    Button { model.select(m.id) } label: { Label(m.name, systemImage: m.id == model.activeID ? "checkmark" : m.template.icon) }
                }
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: model.activeMode?.template.icon ?? "waveform")
                    Text(model.activeMode?.name ?? "Mode").lineLimit(1)
                    Image(systemName: "chevron.down").font(.caption2.weight(.bold))
                }
                .font(.subheadline.weight(.semibold)).padding(.horizontal, 14).padding(.vertical, 9).glassEffect(.regular.interactive(), in: .capsule)
            }
            Spacer()
            Button { showQueue = true } label: { Image(systemName: "list.bullet").font(.body.weight(.semibold)).frame(width: 40, height: 40) }
                .glassEffect(.regular.interactive(), in: .circle)
        }
    }

    private var artwork: some View {
        Artwork(url: nil, radius: 14)
            .overlay { Group { if let a = model.currentArt { Image(uiImage: a).resizable().scaledToFill() } else if model.loading { ProgressView().tint(.white) } } }
            .clipShape(.rect(cornerRadius: 14, style: .continuous))
            .shadow(color: .black.opacity(0.4), radius: 24, y: 14)
            .scaleEffect(model.isPlaying ? 1 : 0.86)
            .animation(.spring(duration: 0.5, bounce: 0.3), value: model.isPlaying)
            .frame(maxWidth: 360)
            .gesture(DragGesture(minimumDistance: 30).onEnded { v in
                if v.translation.width < -80 { model.skip() } else if v.translation.width > 80 { model.restartOrPrevious() }
            })
            .onTapGesture(count: 2) { favorite() }
    }

    private func titleBlock(_ item: QueueItem?) -> some View {
        HStack(alignment: .center, spacing: 12) {
            VStack(alignment: .leading, spacing: 3) {
                Text(item.map(model.title) ?? "Finding something for you…").font(.title2.bold()).lineLimit(1)
                Text(item.map(model.artist) ?? "").font(.title3).foregroundStyle(.white.opacity(0.7)).lineLimit(1)
                if let why = item?.why {
                    Label(why, systemImage: "sparkle").font(.footnote.weight(.medium)).foregroundStyle(.white.opacity(0.55)).lineLimit(1).padding(.top, 2)
                }
            }
            Spacer(minLength: 0)
            Button { favorite() } label: {
                Image(systemName: model.isFavorite(item) ? "heart.fill" : "heart").font(.title2)
                    .foregroundStyle(model.isFavorite(item) ? Color.brand : .white).frame(width: 44, height: 44)
                    .symbolEffect(.bounce, value: favoriteTick)
            }.glassEffect(.regular.interactive(), in: .circle)
        }
    }

    private var scrubber: some View {
        let frac = scrubbing ?? (model.duration > 0 ? min(1, model.progress / model.duration) : 0)
        return VStack(spacing: 6) {
            GeometryReader { g in
                ZStack(alignment: .leading) {
                    Capsule().fill(.white.opacity(0.25))
                    Capsule().fill(.white).frame(width: max(6, g.size.width * frac))
                }
                .frame(height: scrubbing == nil ? 6 : 10).frame(maxHeight: .infinity)
                .contentShape(.rect)
                .gesture(DragGesture(minimumDistance: 0)
                    .onChanged { scrubbing = min(1, max(0, $0.location.x / g.size.width)) }
                    .onEnded { v in model.seek(to: min(1, max(0, v.location.x / g.size.width))); scrubbing = nil })
                .animation(.snappy(duration: 0.2), value: scrubbing == nil)
            }.frame(height: 22)
            HStack {
                Text(clock(frac * model.duration)); Spacer(); Text("-" + clock(max(0, model.duration - frac * model.duration)))
            }.font(.caption.monospacedDigit()).foregroundStyle(.white.opacity(0.6))
        }
    }

    private var transport: some View {
        HStack(spacing: 56) {
            Button { model.restartOrPrevious() } label: { Image(systemName: "backward.fill").font(.system(size: 30)) }
            Button { model.togglePlay() } label: {
                Image(systemName: model.isPlaying ? "pause.fill" : "play.fill").font(.system(size: 44)).frame(width: 64, height: 64)
                    .contentTransition(.symbolEffect(.replace))
            }
            Button { model.skip() } label: { Image(systemName: "forward.fill").font(.system(size: 30)) }
        }.buttonStyle(.plain).sensoryFeedback(.impact(weight: .light), trigger: model.isPlaying)
    }

    private var feedbackRow: some View {
        HStack(alignment: .top) {
            ForEach([Feedback.moreLikeThis, .lessVocals, .moreEnergy, .notThisMood], id: \.self) { f in
                Button { model.feedback(f) } label: {
                    VStack(spacing: 7) {
                        Image(systemName: f.icon).font(.system(size: 21, weight: .medium)).frame(width: 54, height: 54).glassEffect(.regular.interactive(), in: .circle)
                        Text(f.title).font(.caption2.weight(.medium)).multilineTextAlignment(.center).lineLimit(2).frame(height: 28, alignment: .top)
                    }.frame(maxWidth: .infinity)
                }.buttonStyle(.plain).sensoryFeedback(.impact(weight: .medium), trigger: model.toast)
            }
        }
    }

    private func favorite() { favoriteTick += 1; model.feedback(.favorite) }
    private func clock(_ s: Double) -> String { let v = Int(max(0, s)); return String(format: "%d:%02d", v / 60, v % 60) }
}

struct UpNextView: View {
    @Environment(AppModel.self) private var model
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            List {
                if let m = model.activeMode {
                    Section { ForEach(model.upNext) { q in
                        HStack(spacing: 12) {
                            Artwork(url: model.artURL(q), radius: 6).frame(width: 48, height: 48)
                            VStack(alignment: .leading, spacing: 2) { Text(model.title(q)).lineLimit(1); Text(model.artist(q)).font(.subheadline).foregroundStyle(.secondary).lineLimit(1) }
                            Spacer()
                            Text(q.why).font(.caption2.weight(.semibold)).foregroundStyle(.secondary).padding(.horizontal, 8).padding(.vertical, 4).background(.quaternary, in: .capsule)
                        }
                    } } header: { Text("Playing from \(m.name)") }
                }
            }
            .navigationTitle("Up Next").navigationBarTitleDisplayMode(.inline)
            .toolbar { ToolbarItem(placement: .confirmationAction) { Button("Done") { dismiss() }.fontWeight(.semibold) } }
            .task(id: model.upNext.map(\.id)) { model.ensureArtwork(for: model.upNext.map(\.index).filter { $0 >= 0 }) }
        }
    }
}
