import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import CardTest from './app/screens/CardTest';
import ListDetailScreen from './app/screens/ListDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ListDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
