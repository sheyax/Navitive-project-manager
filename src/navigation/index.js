import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from '../screens/SigninScreen/Signin'
import Signup from '../screens/SignupScreen/Signup'
import Home from '../screens/HomeScreen/Home'
import Intro from '../screens/IntroScreen/Intro'
import NewTask from '../screens/NewTaskScreen/NewTask'
import {HomeIcon} from 'react-native-heroicons/solid';
import {HomeIcon as HomeIconOutline} from 'react-native-heroicons/outline';

export default function Navigation() {

  const [isSignedIn, setIsSignedIn] =useState(true)

  const Stack= createNativeStackNavigator();
  const Tab= createBottomTabNavigator();

  if(isSignedIn) {

    return (
<NavigationContainer>
      <Tab.Navigator 
       
      screenOptions={{
        tabBarStyle: { position: 'absolute',
      bottom: 2,
      left: 10,
      right:10,
      backgroundColor: '#E1E1E1',
      borderRadius:0,
      height:70,
      justifyContent: 'center'},
      
      headerShown: false,
      tabBarShowLabel: true
      }}>
        
        <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({focused})=>{
            <View>
              <Text>Home</Text>
            </View>
          }
        }}/>
        <Tab.Screen name='Signin' component={Signin}/>
        <Tab.Screen name='NewTask' component={NewTask}/>
      </Tab.Navigator>
      </NavigationContainer>
          
        );

  }else {

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
}
