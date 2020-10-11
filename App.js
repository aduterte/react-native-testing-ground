import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Test from "./Components/Test.js"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
        <Text>Learning React-Native should be fun!</Text>
      </View>
      <Image
        style={styles.tinyLogo}
        source={{uri: 'https://www.pngitem.com/pimgs/m/148-1487614_spotify-logo-small-spotify-logo-transparent-hd-png.png'}}
      />
        <Test/>
       
      

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
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
