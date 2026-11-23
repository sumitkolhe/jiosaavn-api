import LNPopupUI
import SwiftUI

enum AppTab: Hashable { case home, modes, search }

struct RootView: View {
    @Environment(AppModel.self) private var model

    var body: some View {
        if model.onboarded { MainTabs() } else { OnboardingView() }
    }
}

struct MainTabs: View {
    @Environment(AppModel.self) private var model
    @State private var tab: AppTab = .home
    @State private var open = false

    var body: some View {
        TabView(selection: $tab) {
            Tab("Listen Now", systemImage: "play.circle.fill", value: AppTab.home) { HomeView() }
            Tab("Modes", systemImage: "waveform", value: AppTab.modes) { ModesView() }
            Tab(value: AppTab.search, role: .search) { SearchView() }
        }
        .tabBarMinimizeBehavior(.onScrollDown)
        .popup(isBarPresented: Binding(get: { model.current != nil }, set: { _ in }), isPopupOpen: $open) {
            PlayerView()
        }
        .popupInteractionStyle(.automatic)
        .overlay(alignment: .bottom) { ToastView(text: open ? nil : model.toast).padding(.bottom, 150) }
        .animation(.spring(duration: 0.4), value: model.toast)
    }
}
