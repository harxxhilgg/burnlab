import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  owner: "harshil0",
  name: "burnlab",
  slug: "burnlab",
  version: "1.0.0",
  orientation: "portrait",

  icon: "./assets/images/icon.png",

  scheme: "burnlab",
  userInterfaceStyle: "automatic",

  ios: {
    bundleIdentifier: "com.anonymous.burnlab",
    icon: {
      dark: "./assets/icons/ios-dark.png",
      light: "./assets/icons/ios-light.png",
      tinted: "./assets/icons/ios-tinted.png",
    },
  },

  android: {
    package: "com.anonymous.burnlab",
    adaptiveIcon: {
      foregroundImage: "./assets/icons/adaptive-icon.png",
      monochromeImage: "./assets/icons/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    predictiveBackGestureEnabled: true,
  },

  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/icons/splash-icon-dark.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#FFFFFF",
        dark: {
          image: "./assets/icons/splash-icon-light.png",
          backgroundColor: "#000000",
        },
      },
    ],
  ],

  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  
  extra: {
    eas: {
      projectId: "0ef08a44-37c0-4510-a230-acf1fb6c2003",
    },
  },
};

export default config;