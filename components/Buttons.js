import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useTheme } from "../ThemeContext";

export default function Buttons() {
  const { isEnabled } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity style={isEnabled ? styles.iconD : styles.icon}>
          <AntDesign
            name="arrowup"
            size={24}
            color={isEnabled ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text style={isEnabled ? styles.textD : styles.text}>Sent</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={isEnabled ? styles.iconD : styles.icon}>
          <AntDesign
            name="arrowdown"
            size={24}
            color={isEnabled ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text style={isEnabled ? styles.textD : styles.text}>Receive</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={isEnabled ? styles.iconD : styles.icon}>
          <FontAwesome5
            name="search-dollar"
            size={24}
            color={isEnabled ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text style={isEnabled ? styles.textD : styles.text}>Loan</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={isEnabled ? styles.iconD : styles.icon}>
          <SimpleLineIcons
            name="cloud-upload"
            size={24}
            color={isEnabled ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text style={isEnabled ? styles.textD : styles.text}>Topup</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 2,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#f4f4f4",
    padding: 20,
    borderRadius: 100,
  },
  iconD: {
    backgroundColor: "#27273a",
    padding: 20,
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: "450",
    color: "black",
  },
  textD: {
    fontSize: 18,
    fontWeight: "450",
    color: "#7e848d",
  },
});
