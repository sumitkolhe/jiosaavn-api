import Foundation

enum SaavnAPI {
    struct Hit { let song: ExternalSong; let resolved: Resolved }

    private struct Link: Decodable { let quality: String; let url: String }
    private struct Artists: Decodable { struct A: Decodable { let name: String }; let primary: [A]? }
    private struct Song: Decodable {
        let id: String
        let name: String?
        let image: [Link]?
        let downloadUrl: [Link]?
        let duration: Flexible?
        let artists: Artists?
    }
    private struct Envelope: Decodable { let data: [Song]? }
    private struct SearchEnvelope: Decodable { struct D: Decodable { let results: [Song]? }; let data: D? }
    private struct Flexible: Decodable {
        let value: Double
        init(from decoder: Decoder) throws {
            let c = try decoder.singleValueContainer()
            if let i = try? c.decode(Double.self) { value = i } else { value = Double((try? c.decode(String.self)) ?? "") ?? 0 }
        }
    }

    private static func resolved(_ s: Song, highQuality: Bool) -> Resolved? {
        let links = s.downloadUrl ?? []
        let want = highQuality ? "320kbps" : "160kbps"
        guard let link = links.first(where: { $0.quality == want }) ?? links.last, let url = URL(string: link.url) else { return nil }
        return Resolved(id: s.id, url: url, image: s.image?.last.flatMap { URL(string: $0.url) }, duration: s.duration?.value ?? 0)
    }

    static func resolve(ids: [String], baseURL: String, highQuality: Bool) async throws -> [String: Resolved] {
        guard !ids.isEmpty, var comps = URLComponents(string: baseURL + "/api/songs") else { return [:] }
        comps.queryItems = [URLQueryItem(name: "ids", value: ids.joined(separator: ","))]
        let (data, _) = try await URLSession.shared.data(from: comps.url!)
        var out: [String: Resolved] = [:]
        for s in try JSONDecoder().decode(Envelope.self, from: data).data ?? [] { if let r = resolved(s, highQuality: highQuality) { out[s.id] = r } }
        return out
    }

    static func search(_ query: String, baseURL: String, highQuality: Bool) async throws -> [Hit] {
        guard var comps = URLComponents(string: baseURL + "/api/search/songs") else { return [] }
        comps.queryItems = [URLQueryItem(name: "query", value: query), URLQueryItem(name: "limit", value: "25")]
        let (data, _) = try await URLSession.shared.data(from: comps.url!)
        return (try JSONDecoder().decode(SearchEnvelope.self, from: data).data?.results ?? []).compactMap { s in
            guard let r = resolved(s, highQuality: highQuality) else { return nil }
            let artist = (s.artists?.primary ?? []).prefix(2).map(\.name).joined(separator: ", ")
            return Hit(song: ExternalSong(id: s.id, title: (s.name ?? "").htmlDecoded, artist: artist.htmlDecoded, image: r.image), resolved: r)
        }
    }
}

extension String {
    var htmlDecoded: String {
        replacingOccurrences(of: "&quot;", with: "\"").replacingOccurrences(of: "&amp;", with: "&").replacingOccurrences(of: "&#039;", with: "'")
            .replacingOccurrences(of: "&lt;", with: "<").replacingOccurrences(of: "&gt;", with: ">")
    }
}
