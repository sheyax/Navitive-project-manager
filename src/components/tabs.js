import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/HomeScreen/Home'
import Intro from '../screens/IntroScreen/Intro'

export default function Tabs() {

    const Tab= createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Intro' component={Intro}/>
    
    </Tab.Navigator>
  );
}
