import React from 'react';
import { Pressable, Text, View , StyleSheet} from 'react-native';

export default function CustomEvent({text,type, onPress, bgColor, fgColor, date}) {
  return (
    <Pressable style={[styles.container, styles[`container_${type}`], 
    bgColor ? {backgroundColor: bgColor} : {}]} 
    onPress={onPress}>
                <Text style={styles.info}>{text}</Text>
                <Text style={styles.dateStyle}>{date}</Text>
              </Pressable>
  );
}

const styles= StyleSheet.create({

    container:{
        borderWidth:0.5, 
        height:100, 
        width: '100%',
        borderRadius: 5,
        marginBottom:20,

    },

    container_URGENT:{
        backgroundColor: '#FA7878',
        borderWidth: 0
    },

    container_REGULAR:{
        backgroundColor: '#cdcdcd',
        borderWidth: 0
    },

    info:{
        fontSize:20,
        fontWeight:'400',
        paddingLeft:20,
        paddingTop: 20,
        fontWeight:'500'

    },

    dateStyle:{
        fontSize: 20,
        marginLeft: 20,
        marginTop:14,
        color:'#5C5C5C'
    }
})
