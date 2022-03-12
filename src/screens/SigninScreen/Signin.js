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

  const navigation= useNavigation();


  //connect to database


  const onSigninPressed= async (credentials) => {
    console.log("Sign in")
 /*   const url ='http://localhost:5000/userauth/login';
try{
    const res = await fetch(url, credentials, {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            })

    }).then((response)=>{
      console.log('logged in ')
    navigation.navigate('Home')
    }
    )

    
  }catch{

    console.log('login incomplete')
  }*/
  navigation.navigate('Home')
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