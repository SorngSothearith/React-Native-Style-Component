import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import ButtonRound from "../components/ButtonRound";
export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius="4"
      style={styles.backgroundImage}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoTitle}>Sell what you dont' use</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonRound color="primary">Login</ButtonRound>
        <ButtonRound color="secondary">Register</ButtonRound>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  logoContainer: {
    flex: 1,
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoTitle: {
    fontSize: 20,
    fontWeight: "400",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
