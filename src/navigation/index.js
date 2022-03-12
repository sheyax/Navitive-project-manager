import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Signin from '../screens/SigninScreen/Signin'
import Signup from '../screens/SignupScreen/Signup'
import Home from '../screens/HomeScreen/Home'
import Intro from '../screens/IntroScreen/Intro'

export default function Navigation() {

  const Stack= createNativeStackNavigator();
  return (
      <NavigationContainer>

<Stack.Navigator 
initialRouteName='Intro'
screenOptions={{headerShown: false}}>
  <Stack.Screen name='Intro' component={Intro}/>
  <Stack.Screen name='Home' component={Home}/>
  <Stack.Screen name='Signin' component={Signin}/>
  <Stack.Screen name='Signup' component={Signup}/>
</Stack.Navigator>
      </NavigationContainer>
   
  );
}
