import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from "./Components/Test.js"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
        <Text>Learning React-Native should be fun!</Text>
      </View>
      <View style={styles.container}>
        <Test/>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
