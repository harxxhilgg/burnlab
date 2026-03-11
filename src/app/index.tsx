import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Landing() {
  const theme = useTheme();

  return (
    <ThemedView style={[styles.screen, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>Landing Page</ThemedText>

          <Link href="/login" replace asChild>
            <ThemedText>
              Go to Login
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
  },
  title: {
    fontSize: 28,
  },
});