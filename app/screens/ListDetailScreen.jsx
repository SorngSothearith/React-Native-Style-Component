import React from "react";
<Image source={require("../assets/mosh.jpg")} />;
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function ListDetailScreen() {
  return (
    <View>
      <Card
        title="Red Jacket"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
        borderRaduis
      ></Card>
      <View style={styles.cardList}>
        <Image style={styles.profile} source={require("../assets/mosh.jpg")} />
        <View>
          <Text style={styles.profileName}>Sorng Sothearith</Text>
          <Text style={styles.profileListing}>5 Listing</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardList: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 14,
  },
  profileName: {
    paddingBottom: 5,
    fontSize: 15,
  },
});
