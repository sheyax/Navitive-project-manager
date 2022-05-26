import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native'
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
  const [message, setMessage]= useState('');
  const [task, setTask]=useState();
  const [tasks, setTasks]= useState([]);
  
const onPost= async (credentials) => {
  console.log('posted')
  const resp= await fetch('https://paradeapp.herokuapp.com/postMessage', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify({
        title,
        message,
        tasks
    }),
}).then(navigation.navigate('Home'))

}

const addTask = () =>{
  
  if (task !== null){
    Keyboard.dismiss()
    setTasks([...tasks, {task}])
    console.log(task)
    console.log(tasks)
  }
  setTask('')

}


  return (
    <View style={tw``}>
      <View style={tw`p-5 bg-gray-400`}>
      <Text style={tw`pt-10 text-2xl font-bold `}>New Project</Text>
      </View>
        
        <View style={tw`p-5`}>
        <CustomInput placeholder="Title" value={title} setValue={setTitle}/>
        <CustomMultiLine placeholder='Description' value={message} setValue={setMessage}/>
<View style={{display: 'flex', flexDirection: 'row', 
alignItems: 'center'}}>

  <View style={{width: 300,}}>
<CustomInput placeholder="Add Tasks" value={task} setValue={setTask}/>
</View>
<TouchableOpacity 
onPress={addTask}
style={{backgroundColor: 'green', width: 50, 
height:50, alignItems: 'center',borderRadius: 10,
marginLeft: 10}}>
  <Text style={{color: 'white', fontSize:30, margin: 'auto',}}>+</Text>
</TouchableOpacity>
</View>
        

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
