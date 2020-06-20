import React from "react";
import { StyleSheet } from "react-native";
import color from "../../config/colors";
const styles = StyleSheet.create({
  buttonRound: {
    width:'100%',
    height: 50,
    backgroundColor: color.primary,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:20,
    marginVertical:10
  },
  text:{
    fontSize:20,
    fontWeight:'400',
    color:color.white
  }
});
export default styles;
