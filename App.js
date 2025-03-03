import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <Navigation />;
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component ={LoginScreen}/>
        <Stack.Screen name = "Home" component ={HomeScreen}/>

      </Stack.Navigator> 
    </NavigationContainer>
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
