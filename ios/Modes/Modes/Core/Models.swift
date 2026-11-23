import Foundation

struct SteerStep: Codable, Hashable {
    var attr: String
    var dir: Double          // in standard deviations of that attribute
    var strength = 1.0       // multiplier on the global steer confidence
}

enum Template: String, CaseIterable, Codable, Identifiable {
    case forYou, deepWork, relaxing, driving, workout, blank
    var id: String { rawValue }
    var title: String {
        switch self { case .forYou: "For You"; case .deepWork: "Deep Work"; case .relaxing: "Relaxing"; case .driving: "Driving"; case .workout: "Workout"; case .blank: "Blank" }
    }
    var icon: String {
        switch self { case .forYou: "sparkles"; case .deepWork: "brain.head.profile"; case .relaxing: "leaf.fill"; case .driving: "car.fill"; case .workout: "figure.run"; case .blank: "circle.dashed" }
    }
    var tagline: String {
        switch self {
        case .forYou: "What’s hot, tuned to you"
        case .deepWork: "Quiet, steady, few vocals"
        case .relaxing: "Slow, soft and warm"
        case .driving: "Upbeat with a steady pulse"
        case .workout: "High energy, high tempo"
        case .blank: "Starts neutral, learns only from you"
        }
    }
    /// A starting nudge in the same interpretable space the chips use. Listening evidence overrides it.
    var prior: [SteerStep] {
        switch self {
        case .forYou, .blank: []
        case .deepWork: [.init(attr: "voice", dir: -2), .init(attr: "arousal", dir: -1), .init(attr: "relaxed", dir: 1)]
        case .relaxing: [.init(attr: "arousal", dir: -2), .init(attr: "relaxed", dir: 2), .init(attr: "acoustic", dir: 1)]
        case .driving: [.init(attr: "arousal", dir: 1), .init(attr: "tempo", dir: 1), .init(attr: "danceable", dir: 0.5)]
        case .workout: [.init(attr: "arousal", dir: 2), .init(attr: "party", dir: 2), .init(attr: "danceable", dir: 1.5), .init(attr: "tempo", dir: 1)]
        }
    }
}

struct Mode: Codable, Identifiable {
    var id = UUID()
    var name: String
    var template: Template
    var hue: Double
    var learner: Learner
    var banned: [String] = []
    var recent: [String] = []        // catalog IDs heard, newest last
    var liked: [String] = []
    var plays = 0, skips = 0, likes = 0
    var created = Date()
}

struct AppSettings: Codable {
    var baseURL = "https://saavn-api.nandanvarma.com"
    var steerStrength = 40.0         // confidence of one chip tap, in observation weights
    var explore = 0.05               // Thompson sampling scale; 0 = always the posterior mean
    var highQuality = false
    var languages: [String] = []     // empty until onboarding is done
}

struct EventRecord: Codable {
    var t = Date()
    var mode: String
    var type: String
    var song: String?
    var frac: Double?
    var note: String?
}

/// A song outside the on-device catalog (found by search). It plays, but has no features to learn from.
struct ExternalSong: Hashable {
    let id: String, title: String, artist: String
    let image: URL?
}

struct QueueItem: Identifiable, Hashable {
    let index: Int                   // catalog index, or -1 for an external song
    var ext: ExternalSong?
    var why: String
    var id: String { ext.map { "x:" + $0.id } ?? "c:\(index)" }
}

struct Resolved {
    let id: String
    let url: URL
    let image: URL?
    let duration: Double
}
