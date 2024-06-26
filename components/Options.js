import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export default function Options() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.text}>Language</Text>
        </View>
        <Feather name="chevron-right" size={30} color="#7e848d" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.text}>My Profile</Text>
        </View>
        <Feather name="chevron-right" size={30} color="#7e848d" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.text}>Contact Us</Text>
        </View>
        <Feather name="chevron-right" size={30} color="#7e848d" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.text}>Change Password</Text>
        </View>
        <Feather name="chevron-right" size={30} color="#7e848d" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.text}>Privacy Policy</Text>
        </View>
        <Feather name="chevron-right" size={30} color="#7e848d" />
      </TouchableOpacity>
      <View style={styles.switch}>
        <Text style={styles.theme}>Theme</Text>
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#1ce830" }}
          thumbColor={isEnabled ? "#fffff" : "#f4f3f4"}
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
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  switch: {
    marginTop: 50,
  },
  switch: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  theme: {
    fontSize: 22,
    fontWeight: "500",
  },
});
