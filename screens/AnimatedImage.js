import { StyleSheet, Text, View, Animated } from 'react-native'
import React, {useRef, useEffect} from 'react'
import { transform } from '@babel/core'

const AnimatedImage = () => {
    const first = useRef(new Animated.Value(0)).current
    
    useEffect(() =>{
        Animated.timing(first, {
            toValue:750,
            useNativeDriver:true,
            duration: 5000,
            delay:1000,
        }).start();
    }, []) ;
  return (
    <Animated.Image
          source ={{
              uri: "https://picsum.photos/200/300",
              width: 200,
              height:300,
          }}
          style={{
              alignSelf: 'center',
              transform: [{translateY: first}],
          }}>
      </Animated.Image>
      
  )
}

export default AnimatedImage

const styles = StyleSheet.create({})