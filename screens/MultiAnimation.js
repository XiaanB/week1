import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useRef} from 'react';
import { Animated } from 'react-native-web';
import { transform } from '@babel/core';

const MultiAnimation = () => {
    const first = useRef (new Animated.ValueXY(0)).current;

    useEffect(() => {
        Animated.sequence([

            Animated.timing(first.x, {
                toValue:650,
                useNativeDriver:true,
                duration: 3000,
                delay:1000,
            }),
            
            Animated.spring(first.y, {
                toValue: 650,
                useNativeDriver: true,
                speed: 0,
            }),
            // Move right again from last position
            Animated.timing(first.x, {
                toValue: 0,
                useNativeDriver: true,
                duration: 3000,
            }),

            // Move back up
            Animated.timing(first.y, {
                toValue: 0,
                useNativeDriver: true,
                duration: 3000,
            }),
    ]).start();

    }, []) ;
  return (
    <Animated.View 
        style={{
            width:100,
            height: 100,
            backgroundColor: "orange",
              marginTop: 50,
              transform: [{ translateX: first.x },{ translateY:first.y}],
        }}>
    </Animated.View>
  )
}

export default MultiAnimation

const styles = StyleSheet.create({})