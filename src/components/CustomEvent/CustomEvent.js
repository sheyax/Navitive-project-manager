import React from 'react';
import { Pressable, Text, View , StyleSheet} from 'react-native';

export default function CustomEvent({text,type, onPress, bgColor, fgColor}) {
  return (
    <Pressable style={[styles.container, styles[`container_${type}`], 
    bgColor ? {backgroundColor: bgColor} : {}]} 
    onPress={onPress}>
                <Text style={styles.info}>{text}</Text>
              </Pressable>
  );
}

const styles= StyleSheet.create({

    container:{
        borderWidth:0.5, 
        height:70, 
        width: '100%',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom:20,

    },

    container_URGENT:{
        backgroundColor: '#FA7878',
        borderWidth: 0
    },

    container_REGULAR:{
        backgroundColor: '#78FA88',
        borderWidth: 0
    },

    info:{
        fontSize:18,
        fontWeight:'400',
        padding:10

    }
})
