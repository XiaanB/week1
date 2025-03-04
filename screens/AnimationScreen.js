import React, {useEffect, useRef} from 'react';
import { View, Text, StyleSheet,Animated } from 'react-native';

const AnimationScreen = () => {
    const first = useRef (new Animated.Value(0)).current;

    useEffect(() =>{
        Animated.timing(first, {
            toValue:750,
            useNativeDriver:true,
            duration: 5000,
            delay:1000,
        }).start();
    }, []) ;
  return (
    <Animated.View 
        style={{
            width:100,
            height: 100,
            backgroundColor: "orange",
            marginTop: 50,
            transform:[{translateX:first}],
        }}>
    </Animated.View>
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