import SwiftUI

struct SettingsView: View {
    @Environment(AppModel.self) private var model
    @Environment(\.dismiss) private var dismiss
    @State private var confirmReset = false
    private let languages = ["hindi", "english", "punjabi", "tamil", "telugu", "bengali", "marathi", "kannada", "malayalam", "gujarati", "bhojpuri", "haryanvi"]

    var body: some View {
        @Bindable var m = model
        NavigationStack {
            Form {
                Section {
                    FlowLayout(spacing: 8) {
                        ForEach(languages, id: \.self) { l in
                            let on = m.settings.languages.contains(l)
                            Button {
                                if on { if m.settings.languages.count > 1 { m.settings.languages.removeAll { $0 == l } } } else { m.settings.languages.append(l) }
                            } label: {
                                Text(l.capitalized).font(.subheadline.weight(.medium)).padding(.horizontal, 12).padding(.vertical, 7)
                                    .foregroundStyle(on ? .white : .primary).background(on ? Color.brand : Color(.tertiarySystemFill), in: .capsule)
                            }.buttonStyle(.plain)
                        }
                    }.padding(.vertical, 4)
                } header: { Text("Languages") } footer: { Text("Shapes “Hot right now” and where new modes begin.") }
                Section("Playback") { Toggle("High quality (320 kbps)", isOn: $m.settings.highQuality) }
                Section {
                    DisclosureGroup("Learning") {
                        VStack(alignment: .leading) {
                            Text("Tap strength  \(Int(m.settings.steerStrength))"); Slider(value: $m.settings.steerStrength, in: 5...150)
                            Text("Exploration  \(m.settings.explore, format: .number.precision(.fractionLength(2)))"); Slider(value: $m.settings.explore, in: 0...0.3)
                        }
                    }
                    if FileManager.default.fileExists(atPath: AppModel.eventsURL.path) { ShareLink("Export listening log", item: AppModel.eventsURL) }
                    Button("Erase everything", role: .destructive) { confirmReset = true }
                } header: { Text("Advanced") } footer: { Text("\(model.catalog.count) songs on device.") }
            }
            .navigationTitle("Settings").navigationBarTitleDisplayMode(.inline)
            .toolbar { ToolbarItem(placement: .confirmationAction) { Button("Done") { dismiss() }.fontWeight(.semibold) } }
            .confirmationDialog("Erase all modes and history?", isPresented: $confirmReset, titleVisibility: .visible) {
                Button("Erase", role: .destructive) { model.resetEverything(); dismiss() }
            }
        }
    }
}
