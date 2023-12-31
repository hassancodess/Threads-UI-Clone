import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThreadsProvider } from "../context/ThreadContext";
import * as NavigationBar from "expo-navigation-bar";
import Colors from "../constants/Colors";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	return (
		<>
			{/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
			{!loaded && <SplashScreen />}
			{loaded && <RootLayoutNav />}
		</>
	);
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();
	const { colors } = useTheme();
	const navigationBarColor = colorScheme === "dark" ? "rgb(18, 18, 18)" : colors.card;
	NavigationBar.setBackgroundColorAsync(navigationBarColor);

	return (
		<>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<ThreadsProvider>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					</Stack>
				</ThreadsProvider>
			</ThemeProvider>
		</>
	);
}
