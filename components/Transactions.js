import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import TransactionsCards from "./TransactionsCards";

const Data = [
  {
    id: "1",
    image: require("../assets/apple.png"),
    title: "Apple Store",
    description: "Entertainment",
    price: "- $5.99",
  },
  {
    id: "2",
    image: require("../assets/spotify.png"),
    title: "Spotify",
    description: "Music",
    price: "- $12.99",
  },
  {
    id: "3",
    image: require("../assets/money.png"),
    title: "Transfer Money",
    description: "Transaction",
    price: "$300",
  },
  {
    id: "4",
    image: require("../assets/cart.png"),
    title: "Grocery",
    description: "Shopping",
    price: "- $88",
  },
];

export default function Transactions() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text1}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.text2}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => (
            <TransactionsCards
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 20,
    fontWeight: "500",
  },
  text2: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0066ff",
  },
});
