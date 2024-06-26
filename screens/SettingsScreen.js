import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Options from "../components/Options";

export default function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text style={styles.text}>Settings</Text>
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
  title: {
    marginTop: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});
