import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Header />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: 10,
  },
});
