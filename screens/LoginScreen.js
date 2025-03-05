import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../firebaseconfig";  // Import the necessary functions


WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Get the redirect URI
    const redirectUri = "https://auth.expo.io/@xiaan/week1";
    
    // Google Auth Hook
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: "257137710433-37jp95dcu3hl1p3lu3k4gr46eseinvb4.apps.googleusercontent.com",
        redirectUri: redirectUri,
    });

    useEffect(() => {
        if (response?.type === "success") {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
                .then((userCredential) => {
                    console.log("✅ Google Sign-In Success!", userCredential.user);
                    navigation.navigate("Home");
                })
                .catch((error) => console.error("❌ Google Sign-In Error:", error));
        }
    }, [response]);

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('User registered with email:', user.email);
                navigation.navigate("Home");
            })
            .catch((error) => alert(error.message));
    };

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('User logged in with email:', user.email);
                navigation.navigate("Home");
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/firebase.png")}
                style={{
                    width: "100%",
                    height: 150,
                }}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your email'
                placeholderTextColor="#999"
                value={email}
                onChangeText={(text) => setEmail(text)} 
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your password'
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)} 
            />

            <TouchableOpacity style={styles.button} onPress={signInUser}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={createUser}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={() => promptAsync()}>
                <Text style={styles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Login screen hello</Text>

            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Animation screen" onPress={() => navigation.navigate('Animation')} />
            {/* Add more navigation buttons as necessary */}
            <Button
                title="Go to Traditional Anmation screen"
                onPress={() => navigation.navigate('Traditional Animation')}
            />


            <Button
                title="Go to Animated Image screen"
                onPress={() => navigation.navigate('Animated Image')}
            />


            <Button
                title="Go to Animated Text screen"
                onPress={() => navigation.navigate('Animated Text')}
            />
            <Button
                title="Go to Multi ANimation screen"
                onPress={() => navigation.navigate('Multi Animation')}
            />
                        <Button
                title="Go to Interpolation screen"
                onPress={() => navigation.navigate('Interpolation')}
            />






        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    button: {
        width: '80%',
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 10,
    },
    registerButton: {
        backgroundColor: '#28A745', // Green for register
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    googleButton: {
        backgroundColor: '#4285F4', // Google's blue color
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default LoginScreen;
