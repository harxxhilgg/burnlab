import { AnimatedSplashOverlay } from "@/components/animated-splash-overlay";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <AnimatedSplashOverlay />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
      </Stack>
    </>
  );
}