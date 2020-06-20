import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";
export default function Card({ title, subTitle, image, borderRaduis }) {
  return (
    <View
      style={[styles.cardContainer, borderRaduis ? { borderRadius: 20 } : {}]}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.detailCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{subTitle}</Text>
      </View>
    </View>
  );
}
