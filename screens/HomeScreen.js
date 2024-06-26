import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Transactions from "../components/Transactions";
import { useTheme } from "../ThemeContext";

export default function HomeScreen() {
  const { isEnabled } = useTheme();
  return (
    <View style={isEnabled ? styles.dark : styles.screen}>
      <Header />
      <Card />
      <Transactions />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
  },
  dark: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#161622",
  },
  header: {
    marginTop: 10,
  },
  card: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // width: "100%",
  },

  buttons: {},
});
