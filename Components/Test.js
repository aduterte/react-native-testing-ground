import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Test(){

    return (
        <View style={styles.container}>
        <Text style={styles.red}>This isn't fun.</Text>
      </View>
            
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#cfcfcf'
    },
    red: {
        color: "red"
    },
  });