import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native'
import axios from 'axios';

export default function Signin(props) {

  const {height}= useWindowDimensions
  const [email, setEmail]= useState(null);
  const [password, setPassword]= useState(null);
  const[message, setMessage]= useState();
  const[messageType, setMessageType]= useState()
  const navigation= useNavigation();


  //connect to databas
  const onSigninPressed= async (credentials) => {
    console.log('Posted')
        
    const resp= await fetch('http://192.168.123.231:5000/userauth/login', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            email,
            password
        }),
    })

    const data = await resp.json();
    if (data.message !== 'success') {
      console.log('invalid Credentials')
    } else {
      navigation.navigate('Home')
    }

    setEmail('');
    setPassword('');

  
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
        <CustomInput placeholder="Username" value={email} setValue={setEmail} />
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