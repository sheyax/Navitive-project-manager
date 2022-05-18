import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import TabNav from '../../tabNavigation';
import CustomMultiLine from '../../components/CustomMultiLine/CustomMultiLine';
import CustomDateInput from '../../components/CustomDateInput/CustomDateInput';
import CustomButton from '../../components/CustomButton';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'

export default function NewTask() {

  const navigation = useNavigation();

  const [title, setTitle]= useState('');
  const [description, setDescription]= useState('');
  
const onPost= async () => {
  console.log('posted')
 const res= await fetch('http://192.168.88.231:3200/Projects', {
   method: 'POST',
   headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                description
            }),

 }).then(navigation.navigate('Home'))

 

}


  return (
    <View style={tw``}>
      <View style={tw`p-5 bg-gray-400`}>
      <Text style={tw`pt-10 text-2xl font-bold `}>New Project</Text>
      </View>
        
        <View style={tw`p-5`}>
        <CustomInput placeholder="Title" value={title} setValue={setTitle}/>
        <CustomMultiLine placeholder='Description' value={description} setValue={setDescription}/>

        <CustomDateInput />

        <CustomButton text='Add new project' onPress={onPost} />
        </View>

        
    
    </View>
  );
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding:30,
    },

    head:{
      fontSize: 24,
      fontWeight: 'bold',
    }

    
})
