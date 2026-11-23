import SwiftUI

struct OnboardingView: View {
    @Environment(AppModel.self) private var model
    @State private var picked: Set<String> = ["hindi", "english"]
    private let languages = ["hindi", "english", "punjabi", "tamil", "telugu", "bengali", "marathi", "kannada", "malayalam", "gujarati", "bhojpuri", "haryanvi"]

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            Spacer()
            Image(systemName: "waveform.circle.fill").font(.system(size: 54)).foregroundStyle(Color.brand)
            Text("What do you listen to?").font(.largeTitle.bold())
            Text("We’ll start with what’s hot right now in your languages, then learn your taste as you listen.")
                .font(.body).foregroundStyle(.secondary)
            FlowLayout(spacing: 10) {
                ForEach(languages, id: \.self) { l in
                    let on = picked.contains(l)
                    Button { if on { picked.remove(l) } else { picked.insert(l) } } label: {
                        Text(l.capitalized).font(.body.weight(.medium)).padding(.horizontal, 16).padding(.vertical, 10)
                            .foregroundStyle(on ? .white : .primary)
                            .background(on ? Color.brand : Color(.secondarySystemFill), in: .capsule)
                    }.buttonStyle(.plain)
                }
            }
            .padding(.top, 6)
            Spacer()
            Button { model.finishOnboarding(languages: languages.filter(picked.contains)) } label: {
                Text("Start listening").font(.headline).frame(maxWidth: .infinity).padding(.vertical, 6)
            }
            .buttonStyle(.glassProminent).controlSize(.large).disabled(picked.isEmpty)
        }
        .padding(24)
        .sensoryFeedback(.selection, trigger: picked)
    }
}
