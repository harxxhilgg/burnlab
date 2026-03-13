import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { router } from "expo-router";
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.screen, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedText
            type="title"
            style={[
              styles.title,
              {
                backgroundColor: theme.backgroundElement,
                borderColor: theme.backgroundSelected,
              },
            ]}
          >
            Welcome to Expo
          </ThemedText>

          <ThemedText onPress={() => router.push("/second")}>
            Go to second
          </ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView >
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset,
  },
  container: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  title: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderWidth: 4,
    borderRadius: 24,
    fontSize: 28,
  },
});