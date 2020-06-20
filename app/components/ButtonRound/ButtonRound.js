import React from "react";
import { View,Text } from "react-native";
import styles from "./styles";
import colors from "../../config/colors";
function ButtonRound({color,children }) {
  return (
    <View style={[styles.buttonRound,{backgroundColor:colors[color]}]}>
        <Text style={styles.text}>{children}</Text>     
    </View>
  )
}
export default ButtonRound;
