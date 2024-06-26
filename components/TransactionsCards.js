import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../ThemeContext";

export default function TransactionsCards({
  image,
  title,
  description,
  price,
  id,
}) {
  const { isEnabled } = useTheme();
  // console.log("id: ", id);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View style={isEnabled ? styles.imageD : styles.image}>
          <Image
            style={styles.icon}
            source={
              id === "1" && isEnabled
                ? require("../assets/appleDark.png")
                : image && id === "3" && isEnabled
                ? require("../assets/moneyDark.png")
                : image
            }
          />
        </View>
        <View>
          <Text style={isEnabled ? styles.titleD : styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text
          style={
            id === "3"
              ? styles.specialPrice
              : styles.price && isEnabled
              ? styles.priceD
              : styles.price
          }
        >
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
  imageD: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27273a",
    height: 60,
    width: 60,
  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
  },
  titleD: {
    color: "white",
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
    color: "black",
  },
  priceD: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  specialPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0066ff",
  },
});
