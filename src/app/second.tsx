import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecondScreen() {
  const theme = useTheme();

  return (
    <>
      <Stack.Screen options={{
        headerShown: true,
        headerTitle: "Second",
        // headerStyle: { backgroundColor: "purple" },
        headerBackButtonDisplayMode: "minimal",
      }}
      />

      <ThemedView style={[styles.screen, { backgroundColor: theme.background }]}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedView style={styles.container}>
            <Link href="/third">
              <ThemedText>
                Push to /third
              </ThemedText>
            </Link>
          </ThemedView>
        </SafeAreaView>
      </ThemedView>
    </>
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
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderWidth: 4,
    borderRadius: 24,
    fontSize: 28,
  },
});