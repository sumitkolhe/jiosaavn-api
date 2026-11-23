import Testing
@testable import Modes

@Suite struct LearnerTests {
    @Test func likesRaiseSimilarScoresAndNeutralEvidencePullsToZero() {
        var l = Learner(dim: 4)
        for _ in 0..<3 { l.observe([1, 0, 0, 0], y: 1, weight: 1) }
        l.observe([0, 1, 0, 0], y: 0, weight: 3)
        var rng = SystemRandomNumberGenerator()
        let w = l.weights(sigma: 0, using: &rng)
        #expect(w[0] > 0.5)
        #expect(abs(w[1]) < 0.05)
        #expect(w[0] > w[2])
    }

    @Test func posteriorMeanMatchesClosedFormRidge() {
        var l = Learner(dim: 2, lambda: 2)
        l.observe([1, 0], y: 1, weight: 1); l.observe([0, 1], y: 0.5, weight: 1); l.observe([1, 1], y: 1, weight: 2)
        // A = [[5, 2], [2, 5]], b = [3, 2.5]
        let (w, _) = l.solve()
        let det = 21.0
        #expect(abs(w[0] - (5 * 3 - 2 * 2.5) / det) < 1e-5)
        #expect(abs(w[1] - (5 * 2.5 - 2 * 3) / det) < 1e-5)
    }

    @Test func samplingSpreadShrinksWithEvidence() {
        var rng = SystemRandomNumberGenerator()
        func spread(_ l: Learner, _ rng: inout SystemRandomNumberGenerator) -> Double {
            let xs = (0..<200).map { _ in l.weights(sigma: 1, using: &rng)[0] }
            let m = xs.reduce(0, +) / Double(xs.count)
            return (xs.map { ($0 - m) * ($0 - m) }.reduce(0, +) / Double(xs.count)).squareRoot()
        }
        var few = Learner(dim: 3), many = Learner(dim: 3)
        few.observe([1, 0, 0], y: 1, weight: 1)
        for _ in 0..<50 { many.observe([1, 0, 0], y: 1, weight: 1) }
        #expect(spread(many, &rng) < spread(few, &rng))
    }

    @MainActor @Test func catalogLoadsAndBlocksAlign() throws {
        let c = try Catalog()
        #expect(c.count > 1000)
        #expect(c.features.count == c.count * c.dim)
        #expect(c.attrs.count == c.count * c.attrDim)
        #expect(c.attrStart == c.dim - c.attrDim)
        #expect(c.attrIndex("voice") != nil)
    }
}
