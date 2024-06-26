import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "../ThemeContext";

export default function Options() {
  const { isEnabled, toggleSwitch } = useTheme(false);

  return (
    <View style={[styles.screen, isEnabled ? styles.darkScreen : null]}>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text
            style={isEnabled ? [styles.text, styles.darkText] : styles.text}
          >
            Language
          </Text>
        </View>
        <Feather name="chevron-right" size={30} color={"#7e848d"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text
            style={isEnabled ? [styles.text, styles.darkText] : styles.text}
          >
            My Profile
          </Text>
        </View>
        <Feather name="chevron-right" size={30} color={"#7e848d"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text
            style={isEnabled ? [styles.text, styles.darkText] : styles.text}
          >
            Contact Us
          </Text>
        </View>
        <Feather name="chevron-right" size={30} color={"#7e848d"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text
            style={isEnabled ? [styles.text, styles.darkText] : styles.text}
          >
            Change Password
          </Text>
        </View>
        <Feather name="chevron-right" size={30} color={"#7e848d"} />
      </TouchableOpacity>
      <TouchableOpacity style={isEnabled ? styles.itemD : styles.item}>
        <View>
          <Text
            style={isEnabled ? [styles.text, styles.darkText] : styles.text}
          >
            Privacy Policy
          </Text>
        </View>
        <Feather name="chevron-right" size={30} color={"#7e848d"} />
      </TouchableOpacity>
      <View style={styles.switch}>
        <Text
          style={isEnabled ? [styles.theme, styles.darkText] : styles.theme}
        >
          Theme
        </Text>
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#1ce830" }}
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  darkScreen: {
    backgroundColor: "#161622",
  },
  item: {
    alignItems: "center",
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#f4f4f4",
  },
  itemD: {
    alignItems: "center",
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#f4f4f4",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333333", // Light mode text color
  },
  darkText: {
    color: "#ffffff", // Dark mode text color
  },
  switch: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
  },
  theme: {
    fontSize: 22,
    fontWeight: "500",
    color: "#333333", // Light mode theme text color
  },
});
