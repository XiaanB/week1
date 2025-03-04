import React, { useState} from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import "../firebaseconfig";
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
    const auth = getAuth ();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const navigation = useNavigation();

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log ('User log in  with email:', user.email);
            navigation.navigate("Home");

        } ) .catch((error) => alert(error.message));
    };

    const signInUser = () => {
        signInWithEmailAndPassword (auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log ('User registered with email:', user.email);
            navigation.navigate("Home");


        } ) .catch((error) => alert(error.message));

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
                style = {styles.input}
                placeholder='Enter your email'
                placeholderTextColor="#999"
                icon = "email"
                value ={email}
                onChangeText={(text) => setEmail(text)} />    
            <TextInput
                style = {styles.input}
                placeholder='Enter your password'
                placeholderTextColor="#999"
                icon = "lock"
                secureTextEntry
                value ={password}
                onChangeText={(text) => setPassword(text)} />  

            {/* <Button title = "Login" onPress={signInUser}/> */}
            <TouchableOpacity style={styles.button} onPress={signInUser}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* <Button title = " Register" onPress={createUser}/>  */}
            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={createUser}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>      
            <Text style={styles.text}>Login screen hello</Text>

            <Button 
                title="Go to Home" 
                onPress={() => navigation.navigate('Home')} 
            />

            <Button 
                title="Go to Anmation screen" 
                onPress={() => navigation.navigate('Animation')} 
            />

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
    linkText: {
        color: '#007BFF',
        fontSize: 16,
        marginTop: 15,
    }
});

export default LoginScreen;

