import {StyleSheet} from 'react-native'
import colors from "../../config/colors";
const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: colors.white,
      overflow: "scroll",
    },
    image: {
      width: "100%",
      height: 250,
    },
    detailCard: {
      paddingHorizontal: 20,
      padding: 10,
    },
    title: {
      color: colors.black,
      fontSize: 15,
      fontWeight: "500",
      marginBottom: 5,
    },
    description: {
      color: colors.secondary,
      fontSize: 15,
      fontWeight: "500",
      marginBottom: 5,
    },
  });
  export default styles