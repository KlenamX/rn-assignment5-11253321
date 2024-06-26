import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Transactions from "../components/Transactions";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
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
