import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnimationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Animation Screen</Text>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});