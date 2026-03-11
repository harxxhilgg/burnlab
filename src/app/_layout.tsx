import { AnimatedSplashOverlay } from "@/components/animated-splash-overlay";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaProvider>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <StatusBar style={isDark ? "light" : "dark"} />

        <AnimatedSplashOverlay />

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" options={{ headerTitle: "Home" }} />

          <Stack.Screen name="second" />
          <Stack.Screen name="third" />
        </Stack>

      </ThemeProvider>
    </SafeAreaProvider>
  );
}