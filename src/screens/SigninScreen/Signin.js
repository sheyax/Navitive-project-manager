import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native'
import axios from 'axios';

export default function Signin(props) {

  const {height}= useWindowDimensions
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const[message, setMessage]= useState();
  const[messageType, setMessageType]= useState()
  const navigation= useNavigation();


  //connect to database


  const onSigninPressed= async (credentials) => {
    console.log("Sign in")
  navigation.navigate('Home')
  
  }
  

  const handleMessage = (message, type='Failed') => {
    setMessage(message);
    setMessageType(type);
  }

  const onForgotPressed = () =>{
    console.log("Forgot Password")
  }

  const onPressSignUp= (props) =>{
    console.log("Sign Up")
    props.navigation.navigate('Signup');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container} >
        <View style={styles.box}></View>

        <View style={styles.inputArea}>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} 
        setValue={setPassword} 
        secureTextEntry/>

        <Text >{message}</Text>
        <CustomButton text='Sign in ' onPress={onSigninPressed}/>

        <CustomButton text='Forgot Password ? ' onPress={onForgotPressed} type="TETIARY"/>

        <CustomButton text='Dont have an account ? Create one' onPress={()=> onPressSignUp(props)} type="TETIARY"/>
        </View>
    </View>
    </ScrollView>
  );
}
        
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 20,
      marginTop:20,
    },

    logo:{
        width: 100,
        height:100,
        maxWidth:300,

    },
    box:{
      width: 100,
      height: 100,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      
  },
  inputArea:{
    marginTop:20,
    width: '100%'
  }
  });