import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Landing() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={[styles.screen, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>Landing Page</ThemedText>

          <TouchableOpacity
            onPress={() => router.replace("/login")}
            style={[styles.button, {
              backgroundColor: theme.backgroundElement,
              borderColor: theme.backgroundSelected,
            }]}
            activeOpacity={0.6}
          >
            <ThemedText type="default">Go to login</ThemedText>
          </TouchableOpacity>
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
  title: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 150,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
});