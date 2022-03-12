import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export default function Signup(props) {

  const {height}= useWindowDimensions
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const [email, setEmail]= useState('');
  const [passwordRepeat, setPasswordRepeat]= useState('');

  const navigation= useNavigation();

  
  const onRegisterPressed= async (credentials) =>{

  /*  const url ='http://localhost:5000/userauth/register';
try{
    const res = await fetch(url, credentials, {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
            })

    }).then((response)=>{
      console.log('Registerd ')
    navigation.navigate('Signin')
    }
    )

    
  }catch{

    console.log('register incomplete')
  }*/
  navigation.navigate('Signin')

  }

  const onForgotPressed = () =>{
    console.log("Forgot Password")
  }

  const onPressSignin= () =>{
    console.log("Sign in")
    navigation.navigate('Signin');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container} >
        <Text style={styles.title}>Create an acount</Text>

        <View style={styles.inputArea}>
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} 
        setValue={setPassword} 
        secureTextEntry/>

        <CustomInput placeholder="Password repeat" value={passwordRepeat} 
        setValue={setPasswordRepeat}
        secureTextEntry/>

        <CustomButton text='Register ' onPress={onRegisterPressed}/>
        <CustomButton text='Registered ? Sign in' onPress={onPressSignin} type="TETIARY"/>
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
  },
  title:{
    fontSize: 24,
    fontWeight:'bold',
    color: '#051c60',
    margin: 10,
    marginTop: 20,
  },

  });