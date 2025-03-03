import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import { db } from "../firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const HomeScreen = () => {
  const [newItem, setNewItem] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [items, setItems] = useState([]);

  // Function to fetch data from Firestore
  const fetchData = async () => {
    const mydata = await getDocs(collection(db, "items"));
    const data = mydata.docs.map((doc) => doc.data());
    setItems(data);
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const addItem = async () => {
    await addDoc(collection(db, "items"), {
      name: newItem,
      address: newAddress,
    });

    setNewItem("");
    setNewAddress("");

    // Fetch updated data after adding new item
    fetchData();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add student name"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Add student address"
        value={newAddress}
        onChangeText={setNewAddress}
      />
      <Button title="Add student data" onPress={addItem} />

      <Text style={styles.text}>Fetching data from Firestore:</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10, // Rounded borders
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 5,
    borderRadius: 5, // Rounded corners for each item
  },
});

export default HomeScreen;
