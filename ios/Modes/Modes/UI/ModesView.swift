import SwiftUI

struct ModesView: View {
    @Environment(AppModel.self) private var model
    @State private var showNew = false

    var body: some View {
        NavigationStack {
            List {
                ForEach(model.modes) { m in
                    NavigationLink(value: m.id) {
                        HStack(spacing: 14) {
                            modeGradient(m.hue).frame(width: 60, height: 60).clipShape(.rect(cornerRadius: 14, style: .continuous))
                                .overlay { Image(systemName: m.template.icon).font(.title2).foregroundStyle(.white) }
                            VStack(alignment: .leading, spacing: 3) {
                                Text(m.name).font(.headline)
                                Text(summary(m)).font(.subheadline).foregroundStyle(.secondary).lineLimit(2)
                            }
                        }.padding(.vertical, 4)
                    }
                    .swipeActions { Button("Delete", role: .destructive) { model.deleteMode(m.id) } }
                }
            }
            .navigationTitle("Modes")
            .navigationDestination(for: UUID.self) { ModeDetailView(modeID: $0) }
            .toolbar { ToolbarItem(placement: .topBarTrailing) { Button { showNew = true } label: { Image(systemName: "plus") } } }
            .sheet(isPresented: $showNew) { NewModeView() }
            .overlay { if model.modes.isEmpty { ContentUnavailableView("No modes", systemImage: "waveform", description: Text("Create one for how you want to feel.")) } }
        }
    }

    private func summary(_ m: Mode) -> String {
        let learned = model.dna(m.id).filter { !$0.name.hasPrefix("lang:") && abs($0.value) > 0.12 }.sorted { abs($0.value) > abs($1.value) }.prefix(3)
        if m.plays + m.likes + m.skips < 3 { return m.template.tagline }
        return learned.isEmpty ? m.template.tagline : learned.map { ($0.value > 0 ? "More " : "Less ") + $0.name }.joined(separator: " · ")
    }
}

struct NewModeView: View {
    @Environment(AppModel.self) private var model
    @Environment(\.dismiss) private var dismiss
    @State private var name = ""
    @State private var template: Template = .deepWork
    private let options: [Template] = [.deepWork, .relaxing, .driving, .workout, .blank]

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 22) {
                    TextField("Name (optional)", text: $name).textFieldStyle(.plain).padding(14)
                        .background(Color(.secondarySystemFill), in: .rect(cornerRadius: 14, style: .continuous))
                    Text("Start from").font(.headline)
                    LazyVGrid(columns: [GridItem(.flexible(), spacing: 12), GridItem(.flexible(), spacing: 12)], spacing: 12) {
                        ForEach(options) { t in
                            Button { template = t } label: {
                                VStack(alignment: .leading, spacing: 8) {
                                    Image(systemName: t.icon).font(.title2).foregroundStyle(template == t ? Color.brand : .secondary)
                                    Text(t.title).font(.headline).foregroundStyle(.primary)
                                    Text(t.tagline).font(.caption).foregroundStyle(.secondary).multilineTextAlignment(.leading)
                                    Spacer(minLength: 0)
                                }
                                .frame(maxWidth: .infinity, minHeight: 120, alignment: .topLeading).padding(14)
                                .background(Color(.secondarySystemFill), in: .rect(cornerRadius: 18, style: .continuous))
                                .overlay { RoundedRectangle(cornerRadius: 18, style: .continuous).strokeBorder(Color.brand, lineWidth: template == t ? 2 : 0) }
                            }.buttonStyle(.plain)
                        }
                    }
                    Text("It begins with what’s hot in your languages and learns from every song you finish, skip or tune.")
                        .font(.footnote).foregroundStyle(.secondary)
                }.padding()
            }
            .navigationTitle("New mode").navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) { Button("Cancel") { dismiss() } }
                ToolbarItem(placement: .confirmationAction) {
                    Button("Create") { let id = model.createMode(name: name, template: template); dismiss(); model.select(id) }.fontWeight(.semibold)
                }
            }
            .sensoryFeedback(.selection, trigger: template)
        }
        .presentationDetents([.large])
    }
}

struct ModeDetailView: View {
    @Environment(AppModel.self) private var model
    @Environment(\.dismiss) private var dismiss
    let modeID: UUID
    @State private var confirmDelete = false

    var body: some View {
        if let i = model.modes.firstIndex(where: { $0.id == modeID }) {
            let m = model.modes[i]
            @Bindable var bound = model
            List {
                Section {
                    VStack(spacing: 14) {
                        ModeTile(mode: m).frame(width: 150)
                        TextField("Name", text: $bound.modes[i].name).font(.title2.bold()).multilineTextAlignment(.center)
                        Button { model.select(m.id) } label: { Label("Play", systemImage: "play.fill").frame(maxWidth: 220) }
                            .buttonStyle(.glassProminent).controlSize(.large)
                    }.frame(maxWidth: .infinity).listRowBackground(Color.clear)
                }
                Section {
                    let rows = model.dna(modeID).filter { !$0.name.hasPrefix("lang:") }
                    if m.plays + m.likes + m.skips < 3 {
                        Text("Listen for a few songs and this fills in.").foregroundStyle(.secondary)
                    } else {
                        ForEach(rows, id: \.name) { DNARow(name: $0.name, value: $0.value) }
                    }
                } header: { Text("What it has learned") } footer: { Text("Updated from your listens, skips and taps.") }
                Section("Activity") {
                    LabeledContent("Heard", value: "\(m.plays)")
                    LabeledContent("Favorited", value: "\(m.likes)")
                    LabeledContent("Skipped", value: "\(m.skips)")
                }
                Section {
                    Button("Start over") { model.resetMode(modeID) }
                    Button("Delete mode", role: .destructive) { confirmDelete = true }
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .onDisappear { model.scheduleSave() }
            .confirmationDialog("Delete this mode and everything it learned?", isPresented: $confirmDelete, titleVisibility: .visible) {
                Button("Delete", role: .destructive) { model.deleteMode(modeID); dismiss() }
            }
        }
    }
}

struct DNARow: View {
    let name: String, value: Double
    private static let labels: [String: String] = ["voice": "Vocals", "danceable": "Danceable", "happy": "Happy", "sad": "Sad", "relaxed": "Relaxed", "party": "Party",
                                                   "acoustic": "Acoustic", "electronic": "Electronic", "arousal": "Energy", "valence": "Positivity", "tempo": "Tempo", "hot": "Trending", "recent": "Newness"]
    var body: some View {
        HStack {
            Text(Self.labels[name] ?? name.capitalized).font(.subheadline).frame(width: 96, alignment: .leading)
            GeometryReader { g in
                let half = g.size.width / 2
                ZStack(alignment: .leading) {
                    Capsule().fill(Color(.tertiarySystemFill))
                    Capsule().fill(value >= 0 ? Color.brand : Color.orange).frame(width: max(5, abs(value) * half))
                        .offset(x: value >= 0 ? half : half - max(5, abs(value) * half))
                    Rectangle().fill(Color(.separator)).frame(width: 1)
                        .offset(x: half)
                }
            }.frame(height: 8)
        }
    }
}
