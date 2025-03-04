import React, {useEffect, useRef} from 'react';
import { View, Text, StyleSheet,Animated } from 'react-native';

const AnimationText = () => {
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
        <View style={styles.container}>
            <Animated.Text style={{ transform: [{ translateY: first }] }}>
                Hello
            </Animated.Text>
        </View>
    );
};

export default AnimationText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});