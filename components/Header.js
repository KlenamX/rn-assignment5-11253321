import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <View style={styles.image}>
          <Image style={styles.icon} source={require("../assets/gogo.png")} />
        </View>
        <View>
          <Text style={styles.text1}>Welcome back,</Text>
          <Text style={styles.text2}>Eric Atsu</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.right}>
          <View style={styles.search}>
            <AntDesign name="search1" size={25} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    // backgroundColor: "lightblue",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    width: 65,
    backgroundColor: "#f4f4f4",
    borderRadius: 100,
  },
  icon: {
    height: 55,
    width: 55,
  },
  //   right: {
  //     backgroundColor: "lightgrey",
  //   },
  search: {
    backgroundColor: "#f4f4f4",
    height: 50,
    width: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#7e848d",
    fontSize: 18,
    fontWeight: "400",
  },
  text2: {
    // color: "#7e848d",
    fontSize: 24,
    fontWeight: "600",
  },
});
