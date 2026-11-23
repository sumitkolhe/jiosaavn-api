import Foundation

/// Per-mode Bayesian ridge regression over the item feature vectors.
///
/// The model is `y ≈ w·x`. Every observation (a listen, a like, a chip…) adds `weight · x xᵀ` to the precision
/// matrix and `weight · y · x` to `b`, so the posterior mean is `w = A⁻¹ b`. There are no hand-tuned per-signal
/// scores; the only inputs are the observed target `y` in 0…1 and a confidence `weight`.
/// Sampling from the posterior (Thompson) gives exploration that shrinks as the mode gets more evidence.
struct Learner: Codable {
    var dim: Int
    var prec: [Float]        // row-major dim × dim
    var b: [Float]
    var observations = 0

    init(dim: Int, lambda: Float = 3) {
        self.dim = dim
        prec = [Float](repeating: 0, count: dim * dim)
        for i in 0..<dim { prec[i * dim + i] = lambda }
        b = [Float](repeating: 0, count: dim)
    }

    mutating func observe(_ x: UnsafeBufferPointer<Float>, y: Float, weight: Float) {
        precondition(x.count == dim)
        for i in 0..<dim {
            let xi = weight * x[i]
            if xi == 0 { continue }
            let row = i * dim
            for j in 0..<dim { prec[row + j] += xi * x[j] }
            b[i] += xi * y
        }
        observations += 1
    }

    mutating func observe(_ x: [Float], y: Float, weight: Float) {
        x.withUnsafeBufferPointer { observe($0, y: y, weight: weight) }
    }

    /// Cholesky factor `L` (A = L Lᵀ) and the posterior mean.
    func solve() -> (mean: [Double], chol: [Double]) {
        let n = dim
        var L = [Double](repeating: 0, count: n * n)
        for i in 0..<n {
            for j in 0...i {
                var sum = Double(prec[i * n + j])
                for k in 0..<j { sum -= L[i * n + k] * L[j * n + k] }
                if i == j { L[i * n + i] = max(sum, 1e-9).squareRoot() } else { L[i * n + j] = sum / L[j * n + j] }
            }
        }
        var z = [Double](repeating: 0, count: n)          // L z = b
        for i in 0..<n {
            var s = Double(b[i]); for k in 0..<i { s -= L[i * n + k] * z[k] }; z[i] = s / L[i * n + i]
        }
        var w = [Double](repeating: 0, count: n)          // Lᵀ w = z
        for i in stride(from: n - 1, through: 0, by: -1) {
            var s = z[i]; for k in (i + 1)..<n where k < n { s -= L[k * n + i] * w[k] }; w[i] = s / L[i * n + i]
        }
        return (w, L)
    }

    /// One Thompson draw: `w + sigma · L⁻ᵀ g`, g ~ N(0, I). `sigma == 0` is the posterior mean.
    func weights(sigma: Double, using rng: inout SystemRandomNumberGenerator) -> [Double] {
        let (mean, L) = solve()
        guard sigma > 0 else { return mean }
        let n = dim
        var g = (0..<n).map { _ in Learner.gaussian(&rng) }
        for i in stride(from: n - 1, through: 0, by: -1) {   // Lᵀ u = g
            var s = g[i]; for k in (i + 1)..<n where k < n { s -= L[k * n + i] * g[k] }; g[i] = s / L[i * n + i]
        }
        return (0..<n).map { mean[$0] + sigma * g[$0] }
    }

    private static func gaussian(_ rng: inout SystemRandomNumberGenerator) -> Double {
        let u1 = Double.random(in: Double.leastNonzeroMagnitude..<1, using: &rng), u2 = Double.random(in: 0..<1, using: &rng)
        return (-2 * log(u1)).squareRoot() * cos(2 * .pi * u2)
    }
}
