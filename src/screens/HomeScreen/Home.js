import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomEvent from '../../components/CustomEvent';
import CustomScrollItem from '../../components/CustomScrollItem/CustomScrollItem'
import axios from 'axios'
import CustomProfile from '../../components/CustomProfile';
import CustomInput from '../../components/CustomInput/CustomInput';



export default function Home(props) {
  const [notes, setNotes]= useState(null);
  const [tasks, setTasks]= useState(null)
  const[user, setUser]= useState('')

  const handleNewTask=(props)=>{
    console.log('new task page')
    props.navigation.navigate('NewTask')
  }



  const getTask= ()=>{
    return axios.get('http://localhost:3002/Tasks')
    .then((response)=> {setTasks(response.data)
      })
    .catch((err)=> console.log(err))
  }

  getTask();

  const getUser= ()=>{
    return axios.get('http://localhost:3002/Users')
    .then((response)=>{setUser(response.data)})
    .catch((err)=> console.log('no data'))
  }

  getUser();

  useEffect (()=>{
    getTask()
    getUser()
  }, [])

  console.log(tasks)


  



 /* useEffect (()=>{
    fetch('http://localhost:5000/postMessage')
    .then((response)=> response.json())
    .then(data=> setTasks(data))
  }, [])*/



  return (
    <View >

      <View>
        <CustomProfile 
        imageUri={require('../../../assets/logo.png')}
        profileName='Alex Adofox'
        profileRank='Wing Commander' />
      </View>
<View style={styles.search}>
 <CustomInput placeholder='Find Project'/>
</View>

      

        <ScrollView
        scrollEventThrottle={20}>
<View style={{flex:1, padding: 10}}>

  <View style={styles.latest}>
          <Text style={{ fontSize:25, 
          fontWeight: 'bold', 
          color:'#052E8F',
          marginTop:20,
          paddingHorizontal: 20}}>
            Latest Project
            </Text>

            <Text>See all</Text>

            </View>


            <View style={{ height:280, marginTop: 20}}>
              <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 1' />

                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 2' />

                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 3' />

                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 4' />
              </ScrollView>

            </View>
            </View>

        </ScrollView>

        <View style={{marginTop:5, padding:10}}>
          <Text style={{fontSize:24, fontWeight:'bold', 
          paddingHorizontal:20, 
          color:'#052E8F',
          marginTop:5,}}>Upcoming Events</Text>

          <View style={{marginTop: 20, paddingHorizontal:20, height:200}}>
            <ScrollView showsVerticalScrollIndicator={false}>

              {tasks && tasks.map((task)=>(
                <View key={task.id}>
                  <CustomEvent text={task.title} type='REGULAR' date={task.deadline}/>

                </View>
              ))}

              
{/*
              <CustomEvent text='Chief visit to unit' type='URGENT'/>

              <CustomEvent text='Chief visit to unit' />

              <CustomEvent text='Chief visit to unit' type='REGULAR'/>

              <CustomEvent text='Chief visit to unit' type='URGENT'/>

              <CustomEvent text='Chief visit to unit' type='URGENT'/> */}
              
            </ScrollView>
          </View>
        </View>

        <View>
          <CustomButton text='New Task' onPress={()=>handleNewTask(props)}/>
          </View>
    
    </View>
  );
}


const styles= StyleSheet.create({

  search:{
    marginLeft: 25,
    marginRight: 25,
    borderWidth:0.8,
    borderRadius:10
  },

  latest:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'between'
  }

})