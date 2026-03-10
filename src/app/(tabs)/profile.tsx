import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { env } from "@/constants/env";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle" style={styles.title}>
          Welcome to Profile
        </ThemedText>

        <ThemedText type="code">
          <ThemedText>
            API URL:
          </ThemedText>
          {" "}
          <ThemedText>
            {env.API_URL}
          </ThemedText>
        </ThemedText>

        <ThemedText type="code">
          <ThemedText>
            SUPABASE URL:
          </ThemedText>
          {" "}
          <ThemedText>
            {env.SUPABASE_URL}
          </ThemedText>
        </ThemedText>

        <ThemedText type="code">
          <ThemedText>
            SUPABASE ANON KEY:
          </ThemedText>
          {" "}
          <ThemedText>
            {env.SUPABASE_ANON_KEY}
          </ThemedText>
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  title: {
    textAlign: 'center',
  },
});