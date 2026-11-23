import SwiftUI

struct SearchView: View {
    @Environment(AppModel.self) private var model
    @State private var query = ""
    @State private var hits: [SaavnAPI.Hit] = []
    @State private var searching = false

    var body: some View {
        NavigationStack {
            List {
                if query.isEmpty {
                    let hot = model.hotNow(limit: 8)
                    Section("Hot right now") {
                        ForEach(hot, id: \.self) { i in Button { model.play(index: i) } label: { SongRow(index: i) }.buttonStyle(.plain) }
                    }.task(id: hot) { model.ensureArtwork(for: hot) }
                } else {
                    ForEach(hits, id: \.song.id) { h in
                        Button { model.play(hit: h) } label: {
                            HStack(spacing: 12) {
                                Artwork(url: h.song.image, radius: 6).frame(width: 52, height: 52)
                                VStack(alignment: .leading, spacing: 2) {
                                    Text(h.song.title).lineLimit(1)
                                    Text(h.song.artist).font(.subheadline).foregroundStyle(.secondary).lineLimit(1)
                                }
                            }.contentShape(.rect)
                        }.buttonStyle(.plain)
                    }
                }
            }
            .listStyle(.plain)
            .navigationTitle("Search")
            .searchable(text: $query, prompt: "Songs, artists")
            .overlay {
                if !query.isEmpty, hits.isEmpty { if searching { ProgressView() } else { ContentUnavailableView.search(text: query) } }
            }
            .task(id: query) {
                let q = query.trimmingCharacters(in: .whitespaces)
                guard q.count >= 2 else { hits = []; return }
                try? await Task.sleep(for: .milliseconds(300))
                guard !Task.isCancelled else { return }
                searching = true; defer { searching = false }
                hits = (try? await SaavnAPI.search(q, baseURL: model.settings.baseURL, highQuality: model.settings.highQuality)) ?? []
            }
        }
    }
}
