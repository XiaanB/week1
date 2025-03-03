import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

import {db} from "../firebaseconfig";
import {collection, addDoc, getDocs} from 'firebase/firestore'

const HomeScreen = () => {
        const [newItem, setNewItem] =  useState("");
        const [newAdress, setNewAdress] =  useState("");

        const addItem = async() => {
            await addDoc(collection(db, 'items'), {
                name: newItem,
                address : newAdress

            } );
            setNewItem("");
            setNewAdress("");
        };

    return (
        <View style={styles.container}>
            <TextInput
                style = {{
                    height:50,
                    width:300,
                    borderBlockColor:'gray',
                    borderWidth:2,
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder='Add student name'
                value={newItem}
                onChangeText={setNewItem}
            />

            <TextInput
                style = {{
                    height:50,
                    width:300,
                    borderBlockColor:'gray',
                    borderWidth:2,
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder='Add student adress'
                value={newAdress}
                onChangeText={setNewAdress}
            />
            <Button title ="Add student data" onPress={addItem}             
/> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8', // Light background for visibility
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default HomeScreen;
