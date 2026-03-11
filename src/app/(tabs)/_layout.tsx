import { AnimatedSplashOverlay } from '@/components/animated-splash-overlay';
import AppTabs from '@/components/app-tabs';
import React from 'react';

export default function TabLayout() {
  const isDev = __DEV__;

  if (isDev) {
    console.log("DEVELOPMENT MODE");
  }

  return (
    <>
      <AnimatedSplashOverlay />
      <AppTabs />
    </>
  );
}