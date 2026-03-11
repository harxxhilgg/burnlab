import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { env } from "@/constants/env";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedText type="subtitle" style={styles.title}>
            Welcome to Profile
          </ThemedText>

          <ThemedText type="code">
            <ThemedText>API URL:</ThemedText>{" "}
            <ThemedText>{env.API_URL}</ThemedText>
          </ThemedText>

          <Link href="/" replace asChild>
            <ThemedText>
              replace to /landing
            </ThemedText>
          </Link>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    gap: Spacing.three,
  },
  title: {
    textAlign: "center",
  },
});