import Foundation

struct CatalogItem {
    let id: String, title: String, artist: String, lang: String, year: Int, album: String, img: String
}

/// The on-device song index: per-song feature vectors for the learner plus interpretable audio attributes.
final class Catalog {
    let items: [CatalogItem]
    let dim: Int
    let attrDim: Int
    let attrNames: [String]
    let attrStd: [Double]
    let langs: [String]
    let features: [Float]        // count × dim
    let attrs: [UInt8]           // count × attrDim, 0…255 for display
    var attrStart: Int { dim - attrDim }
    var count: Int { items.count }
    let indexByID: [String: Int]

    private struct Meta: Decodable {
        let count: Int, dim: Int, attrDim: Int
        let attrNames: [String]
        let attrStd: [Double]
        let langs: [String]?
        let items: [[Cell]]
    }
    private enum Cell: Decodable {
        case s(String), i(Int)
        init(from decoder: Decoder) throws {
            let c = try decoder.singleValueContainer()
            if let v = try? c.decode(Int.self) { self = .i(v) } else { self = .s(try c.decode(String.self)) }
        }
        var str: String { if case .s(let v) = self { return v } else { return "" } }
        var int: Int { if case .i(let v) = self { return v } else { return 0 } }
    }

    init() throws {
        guard let jsonURL = Bundle.main.url(forResource: "catalog", withExtension: "json"),
              let binURL = Bundle.main.url(forResource: "catalog", withExtension: "bin") else {
            throw NSError(domain: "Catalog", code: 1, userInfo: [NSLocalizedDescriptionKey: "catalog resources missing"])
        }
        let meta = try JSONDecoder().decode(Meta.self, from: Data(contentsOf: jsonURL))
        items = meta.items.map { CatalogItem(id: $0[0].str, title: $0[1].str, artist: $0[2].str, lang: $0[3].str, year: $0[4].int, album: $0[5].str, img: $0.count > 6 ? $0[6].str : "") }
        dim = meta.dim; attrDim = meta.attrDim; attrNames = meta.attrNames
        attrStd = meta.attrStd.map { $0 > 1e-6 ? $0 : 1 }
        langs = meta.langs ?? []
        let data = try Data(contentsOf: binURL)
        let floatCount = meta.count * meta.dim
        var f = [Float](repeating: 0, count: floatCount)
        data.withUnsafeBytes { raw in
            let h = raw.bindMemory(to: Float16.self)
            for i in 0..<floatCount { f[i] = Float(h[i]) }
        }
        features = f
        attrs = [UInt8](data.suffix(from: floatCount * 2))
        indexByID = Dictionary(uniqueKeysWithValues: items.enumerated().map { ($1.id, $0) })
    }

    func vector(_ i: Int) -> ArraySlice<Float> { features[(i * dim)..<((i + 1) * dim)] }
    func attr(_ i: Int, _ k: Int) -> Double { Double(attrs[i * attrDim + k]) / 255 }
    func attrIndex(_ name: String) -> Int? { attrNames.firstIndex(of: name) }
}
