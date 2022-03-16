import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../screens/SigninScreen/Signin'
import Signup from '../screens/SignupScreen/Signup'
import Home from '../screens/HomeScreen/Home'
import Intro from '../screens/IntroScreen/Intro'
import NewTask from '../screens/NewTaskScreen/NewTask'

export default function Navigation() {

  const Stack= createNativeStackNavigator();
  const Tab= createBottomTabNavigator();
  return (
      <NavigationContainer>

<Stack.Navigator 
initialRouteName='Intro'
screenOptions={{
headerShown: false,

}}>
  <Stack.Screen name='Intro' component={Intro}/>
  <Stack.Screen name='Home' component={Home}/>
  <Stack.Screen name='Signin' component={Signin}/>
  <Stack.Screen name='Signup' component={Signup}/>
  <Stack.Screen name='NewTask' component={NewTask}/>
</Stack.Navigator>

      </NavigationContainer>
   
  );
}
