import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "../ThemeContext";

export default function Statistics() {
  const { isEnabled } = useTheme();
  return (
    <View style={isEnabled ? styles.conatinerD : styles.conatiner}>
      <Text style={isEnabled ? styles.textD : styles.text}>Statistics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  conatinerD: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#161622",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  textD: {
    fontSize: 20,
    color: "white",
  },
});
