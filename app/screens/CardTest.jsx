import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function CardTest() {
  return (
    <View style={styles.cardPage}>
      <View style={styles.cardDetail}>
        <Card
          title="asdas"
          subTitle="$100"
          image={require("../assets/jacket.jpg")}
          borderRaduis
        ></Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardPage: {
    flex: 1,
  },
  cardDetail: {
    width: "100%",
    height: "50%",
    backgroundColor: "#f8f4f4",
    padding: 20,
  },
});
