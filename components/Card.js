import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Buttons from "./Buttons";

export default function Card() {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/Card.png")} />
      <Buttons />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // width: "100%",
  },
});
