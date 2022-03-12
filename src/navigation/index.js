import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../screens/SigninScreen/Signin'
import Signup from '../screens/SignupScreen/Signup'
import Home from '../screens/HomeScreen/Home'
import Intro from '../screens/IntroScreen/Intro'

export default function Navigation() {

  const Stack= createNativeStackNavigator();
  const Tab= createBottomTabNavigator();
  return (
      <NavigationContainer>

<Tab.Navigator 
initialRouteName='Home'
screenOptions={{
  tabBarStyle: { position: 'absolute',
bottom: 25,
left: 20,
right:20,
backgroundColor: 'gray',
borderRadius:20,
height:90,
justifyContent: 'center'},

headerShown: false,
tabBarShowLabel: false
}}>
  <Tab.Screen name='Intro' component={Intro}/>
  <Tab.Screen name='Home' component={Home}/>
  <Tab.Screen name='Signin' component={Signin}/>
  <Tab.Screen name='Signup' component={Signup}/>
</Tab.Navigator>

      </NavigationContainer>
   
  );
}
