import React from 'react';
import { Pressable, Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'


export default function CustomEvent({text,type, onPress, bgColor, fgColor, date}) {


    const navigation = useNavigation();

    const onClick= () =>{
        navigation.navigate('EventDetail')
    }
  return (
      <TouchableOpacity onPress={onClick}>
    <View style={[styles.container, styles[`container_${type}`], 
    bgColor ? {backgroundColor: bgColor} : {}]} 
    onPress={onPress}>
                <Text style={styles.info}>{text}</Text>
                <Text style={styles.dateStyle}>{date}</Text>
              </View>
              </TouchableOpacity>
  );
}

const styles= StyleSheet.create({

    container:{
        borderWidth:0.5, 
        height:60, 
        width: '100%',
        borderRadius: 5,
        marginBottom:10,

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
        fontSize:18,
        fontWeight:'400',
        paddingLeft:20,
        paddingTop: 10,
        fontWeight:'500'

    },

    dateStyle:{
        fontSize: 12,
        marginLeft: 20,
        marginTop:5,
        color:'#5C5C5C'
    }
})
