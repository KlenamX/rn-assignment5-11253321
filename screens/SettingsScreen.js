import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Options from "../components/Options";
import { useTheme } from "../ThemeContext";

export default function SettingsScreen() {
  const { isEnabled } = useTheme();

  // const statusBarStyle = isEnabled ? "light-content" : "dark-content";

  return (
    <View style={isEnabled ? styles.dark : styles.screen}>
      {/* <StatusBar barStyle={statusBarStyle} /> */}
      <View style={styles.title}>
        <Text style={[styles.text, isEnabled ? styles.darkText : null]}>
          Settings
        </Text>
      </View>
      <Options />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
  },
  dark: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#161622",
  },
  title: {
    marginTop: 70,
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#333333", // Default light mode text color
  },
  darkText: {
    color: "#ffffff", // Dark mode text color
  },
});
