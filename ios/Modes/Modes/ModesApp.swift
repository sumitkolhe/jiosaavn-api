import SwiftUI

@main
struct ModesApp: App {
    @State private var model: AppModel?
    @State private var failure: String?

    var body: some Scene {
        WindowGroup {
            Group {
                if let model {
                    RootView().environment(model)
                } else if let failure {
                    ContentUnavailableView("Couldn’t start", systemImage: "exclamationmark.triangle", description: Text(failure))
                } else {
                    ProgressView()
                }
            }
            .tint(.brand)
            .task { do { model = try AppModel() } catch { failure = error.localizedDescription } }
        }
    }
}
