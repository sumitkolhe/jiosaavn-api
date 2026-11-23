import SwiftUI

extension Color {
    static let brand = Color(red: 1.0, green: 0.23, blue: 0.37)
}

func modeGradient(_ hue: Double) -> LinearGradient {
    LinearGradient(colors: [Color(hue: hue, saturation: 0.62, brightness: 0.95), Color(hue: (hue + 0.07).truncatingRemainder(dividingBy: 1), saturation: 0.85, brightness: 0.62)],
                   startPoint: .topLeading, endPoint: .bottomTrailing)
}

/// Cover art with a quiet placeholder, used everywhere a song or mode is shown.
struct Artwork: View {
    let url: URL?
    var radius: CGFloat = 8
    var body: some View {
        Color(.secondarySystemFill)
            .overlay { Image(systemName: "music.note").font(.title3).foregroundStyle(.tertiary) }
            .overlay { if let url { AsyncImage(url: url) { $0.resizable().scaledToFill() } placeholder: { Color.clear } } }
            .clipShape(.rect(cornerRadius: radius, style: .continuous))
            .aspectRatio(1, contentMode: .fit)
    }
}

struct ModeTile: View {
    let mode: Mode
    var body: some View {
        modeGradient(mode.hue)
            .overlay(alignment: .topLeading) { Image(systemName: mode.template.icon).font(.system(size: 30, weight: .semibold)).foregroundStyle(.white).padding(14) }
            .overlay(alignment: .bottomLeading) {
                Image(systemName: "play.fill").font(.footnote.weight(.bold)).foregroundStyle(.white).padding(10)
                    .glassEffect(.regular.interactive(), in: .circle).padding(10)
            }
            .aspectRatio(1, contentMode: .fit)
            .clipShape(.rect(cornerRadius: 20, style: .continuous))
    }
}

struct SongRow: View {
    @Environment(AppModel.self) private var model
    let index: Int
    var body: some View {
        let c = model.catalog.items[index]
        HStack(spacing: 12) {
            Artwork(url: model.artURL(index), radius: 6).frame(width: 52, height: 52)
            VStack(alignment: .leading, spacing: 2) {
                Text(c.title).font(.body).lineLimit(1)
                Text(c.artist).font(.subheadline).foregroundStyle(.secondary).lineLimit(1)
            }
            Spacer(minLength: 0)
        }
        .contentShape(.rect)
    }
}

struct ToastView: View {
    let text: String?
    var body: some View {
        if let text {
            Text(text).font(.footnote.weight(.semibold)).padding(.horizontal, 16).padding(.vertical, 11)
                .glassEffect(.regular, in: .capsule)
                .transition(.move(edge: .bottom).combined(with: .opacity))
        }
    }
}

/// Wraps its children onto as many lines as needed.
struct FlowLayout: Layout {
    var spacing: CGFloat = 10
    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        arrange(width: proposal.width ?? 320, subviews: subviews).size
    }
    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        for (i, p) in arrange(width: bounds.width, subviews: subviews).origins.enumerated() {
            subviews[i].place(at: CGPoint(x: bounds.minX + p.x, y: bounds.minY + p.y), proposal: .unspecified)
        }
    }
    private func arrange(width: CGFloat, subviews: Subviews) -> (origins: [CGPoint], size: CGSize) {
        var x: CGFloat = 0, y: CGFloat = 0, row: CGFloat = 0, maxX: CGFloat = 0
        var origins: [CGPoint] = []
        for s in subviews {
            let sz = s.sizeThatFits(.unspecified)
            if x + sz.width > width, x > 0 { x = 0; y += row + spacing; row = 0 }
            origins.append(CGPoint(x: x, y: y)); x += sz.width + spacing; row = max(row, sz.height); maxX = max(maxX, x - spacing)
        }
        return (origins, CGSize(width: maxX, height: y + row))
    }
}

/// One inline question, shown after a mode has been heard for a while. Replaces a modal prompt.
struct RatingCard: View {
    @Environment(AppModel.self) private var model
    var body: some View {
        if model.askRating {
            VStack(spacing: 10) {
                Text("How does \(model.activeMode?.name ?? "this mode") feel so far?").font(.subheadline.weight(.semibold))
                HStack(spacing: 26) {
                    ForEach([(1, "😕"), (2, "🙂"), (3, "😍")], id: \.0) { s, e in Button(e) { model.rate(s) }.font(.largeTitle).buttonStyle(.plain) }
                }
            }
            .frame(maxWidth: .infinity).padding(16)
            .glassEffect(.regular, in: .rect(cornerRadius: 20))
            .transition(.scale.combined(with: .opacity))
        }
    }
}
