//import liraries
import { transform } from '@babel/core';
import React, { Component } from 'react';
import { View } from 'react-native';
import { useEffect, useState } from 'react';


// create a component
const TraditionalAnimation = () => {
    const [first, setFirst] = useState(0);

    useEffect(() =>{
        for(let i=0;i<250;i++){
            setTimeout(() =>{
                setFirst(i);
            },25*i);
        }
    },[]);

    return (
        <View style={{
            width:100,
            height: 100,
            backgroundColor: "orange",
            marginTop: 50,
            transform:[{translateX:first}],
        }}>
        </View>
    );
};


//make this component available to the app
export default TraditionalAnimation;
