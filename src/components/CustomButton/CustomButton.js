import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function CustomButtom({onPress, text, type="PRIMARY", bgColor, fgColor}) {
  return (
    <Pressable
     style={[styles.container, styles[`container_${type}`], 
     bgColor ? {backgroundColor: bgColor} : {}]}
     onPress={onPress}>
        <Text style={[styles.button, styles[`button_${type}`], 
    fgColor ? {backgroundColor: fgColor} : {}]}>{text}</Text>

    
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        
        
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        padding: 15,

        borderRadius: 5,
    },

    container_PRIMARY:{
        backgroundColor: 'blue',

    },

    container_TETIARY:{

    },
    button:{
        fontWeight: 'bold',
        color: 'white'
    },

    button_TETIARY:{
        color: 'gray'
    }
})