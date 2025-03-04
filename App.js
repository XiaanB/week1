import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AnimationScreen from "./screens/AnimationScreen";
import TraditionalAnimation from './screens/TraditionalAnimation';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <Navigation />;
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component ={LoginScreen}/>
          <Stack.Screen name = "Home" component ={HomeScreen}/>
          <Stack.Screen name = "Animation" component={AnimationScreen}/>
          <Stack.Screen name = "Traditional Animation" component={TraditionalAnimation}/>




        </Stack.Navigator> 
      </NavigationContainer>
    </GestureHandlerRootView>
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
