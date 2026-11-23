import SwiftUI

struct HomeView: View {
    @Environment(AppModel.self) private var model
    @State private var showSettings = false
    @State private var showNew = false

    var body: some View {
        NavigationStack {
            ScrollView {
                LazyVStack(alignment: .leading, spacing: 28) {
                    RatingCard().padding(.horizontal)
                    modesSection
                    hotSection
                }
                .padding(.bottom, 24)
            }
            .navigationTitle("Listen Now")
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) { Button { showSettings = true } label: { Image(systemName: "person.crop.circle") } }
            }
            .sheet(isPresented: $showSettings) { SettingsView() }
            .sheet(isPresented: $showNew) { NewModeView() }
            .animation(.snappy, value: model.askRating)
        }
    }

    private var modesSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Your modes").font(.title2.bold()).padding(.horizontal)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top, spacing: 14) {
                    ForEach(model.modes) { m in
                        Button { model.select(m.id) } label: {
                            VStack(alignment: .leading, spacing: 6) {
                                ModeTile(mode: m).frame(width: 164)
                                Text(m.name).font(.subheadline.weight(.semibold)).foregroundStyle(.primary)
                                Text(m.template.tagline).font(.caption).foregroundStyle(.secondary).lineLimit(2).frame(width: 164, alignment: .leading)
                            }
                        }.buttonStyle(.plain)
                    }
                    Button { showNew = true } label: {
                        VStack(alignment: .leading, spacing: 6) {
                            RoundedRectangle(cornerRadius: 20, style: .continuous).fill(Color(.secondarySystemFill))
                                .overlay { Image(systemName: "plus").font(.title.weight(.semibold)).foregroundStyle(Color.brand) }
                                .frame(width: 164, height: 164)
                            Text("New mode").font(.subheadline.weight(.semibold)).foregroundStyle(.primary)
                        }
                    }.buttonStyle(.plain)
                }.padding(.horizontal)
            }
        }
    }

    private var hotSection: some View {
        let hot = model.hotNow(limit: 15)
        return VStack(alignment: .leading, spacing: 4) {
            Text("Hot right now").font(.title2.bold()).padding(.horizontal)
            Text(model.settings.languages.map(\.capitalized).joined(separator: " · ")).font(.subheadline).foregroundStyle(.secondary).padding(.horizontal)
            VStack(spacing: 0) {
                ForEach(Array(hot.enumerated()), id: \.element) { n, i in
                    Button { model.play(index: i) } label: { SongRow(index: i).padding(.vertical, 7).padding(.horizontal) }.buttonStyle(.plain)
                    if n < hot.count - 1 { Divider().padding(.leading, 80) }
                }
            }.padding(.top, 8)
        }
        .task(id: hot) { model.ensureArtwork(for: hot) }
    }
}
