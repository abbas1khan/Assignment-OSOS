import { SafeAreaView, Platform, StatusBar } from "react-native";

function AppScreen({ style, children }) {
    return (
        <SafeAreaView style={[{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, backgroundColor: '#82d9e2' }, style]}>
            {children}
        </SafeAreaView>
    );
}

export default AppScreen;