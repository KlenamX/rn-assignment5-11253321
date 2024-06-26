import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function TransactionsCards({
  image,
  title,
  description,
  price,
  id,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View style={styles.image}>
          <Image style={styles.icon} source={image} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={id === "3" ? styles.specialPrice : styles.price}>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  left: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    height: 60,
    width: 60,
  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    color: "#a2a2a7",
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
  specialPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0066ff",
  },
});
