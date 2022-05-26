import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView,SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
  const[rank, setRank]= useState(null)
  const [projects, setProjects]= useState(null)
  const [isAdmin, setIsAdmin]= useState(false)


  const handleNewTask=(props)=>{
    console.log('new task page')
    props.navigation.navigate('NewTask')
  }

  const getProject = async () => {
    const resp = await fetch("https://paradeapp.herokuapp.com/postMessage");
    const data = await resp.json();
    setProjects(data)
  }



useEffect(() => {
  getProject()

}, [projects])


  /*const getTask= async (credentials) => {
    const resp = await fetch('http://192.168.212.231:5000/postMessage', {
      method: 'GET',
      headers:{'Content-Type': 'application/json'},
      Credentials: 'include'
    });
    const data = await resp.json();
    const {tasks, ...details} = await data
    setTasks(details)
  }

  getTask();*/

  const getUser = async (credentials) =>{
    const resp= await fetch('https://paradeapp.herokuapp.com/userauth/user', {
        method: 'GET',
        headers:{'Content-Type': 'application/json'},
        Credentials: 'include'

    })

    const data= await resp.json()
    setUser(data.name)
    setRank(data.rank)

    if(data.roles === 'admin'){
      setIsAdmin(true)
    
    }
    
}

  getUser();

  useEffect (()=>{
    getUser()
  }, [user])




  



 /* useEffect (()=>{
    fetch('http://localhost:5000/postMessage')
    .then((response)=> response.json())
    .then(data=> setTasks(data))
  }, [])*/



if(isAdmin==true){
  return(
    <SafeAreaView >

    <View>
      <CustomProfile 
      imageUri={require('../../../assets/logo.png')}
      profileName={user}
      profileRank={rank} />
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
        marginTop:10,
        paddingHorizontal: 20}}>
          Latest Project
          </Text>
          {/*<TouchableOpacity onPress={()=>handleNewTask(props)}>
          <Text>New Tak</Text>
        </TouchableOpacity>*/}
          

          </View>


          <View style={{ height:450, marginTop: 20, alignItems:'center'}}>
            <ScrollView horizontal={false}
            showsHorizontalScrollIndicator={false}>

{projects && projects.map((project)=>(
              <View key={project._id}>
                <CustomScrollItem title={project.title} 
                deadline={project.deadline} 
                details= {project.message}
                category= "Avionics, Powerplant"
                tasks= {project.tasks}
                />

              </View>
           ))}

           

           <CustomScrollItem />
              
            </ScrollView>

          </View>
          </View>

      </ScrollView>

      

     {/* <View style={{marginTop:5, padding:10}}>
        <Text style={{fontSize:24, fontWeight:'bold', 
        paddingHorizontal:20, 
        color:'#052E8F',
        marginTop:5,}}>Upcoming Events</Text>

        <View style={{marginTop: 20, paddingHorizontal:20, height:180}}>
          <ScrollView showsVerticalScrollIndicator={false}>

           {/* {tasks && tasks.map((task)=>(
              <View key={task.id}>
                <CustomEvent text={task.title} type='REGULAR' date={task.deadline}/>

              </View>
           ))} 

            

            
            
          </ScrollView>
        </View>
      </View>*/}

      <View style={{alignItems: 'center'}}>

      <View style={{width: 150, margin: 'auto',  }}>
        <CustomButton text='New Project' onPress={()=>handleNewTask(props)}/>
        </View>
        </View>
  
  </SafeAreaView>
  )
}

else {


  return (
    <SafeAreaView >

      <View>
        <CustomProfile 
        imageUri={require('../../../assets/logo.png')}
        profileName={user}
        profileRank={rank} />
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
          marginTop:10,
          paddingHorizontal: 20}}>
            Latest Project
            </Text>
            {/*<TouchableOpacity onPress={()=>handleNewTask(props)}>
            <Text>New Tak</Text>
          </TouchableOpacity>*/}
            

            </View>


            <View style={{ height:450, marginTop: 20, alignItems:'center'}}>
              <ScrollView horizontal={false}
              showsHorizontalScrollIndicator={false}>

{projects && projects.map((project)=>(
                <View key={project._id}>
                  <CustomScrollItem title={project.title} 
                  deadline={project.deadline} 
                  details= {project.message}
                  category= "Avionics, Powerplant"
                  tasks= {project.tasks}
                  />

                </View>
             ))}

             

             <CustomScrollItem />
                
              </ScrollView>

            </View>
            </View>

        </ScrollView>

        

       {/* <View style={{marginTop:5, padding:10}}>
          <Text style={{fontSize:24, fontWeight:'bold', 
          paddingHorizontal:20, 
          color:'#052E8F',
          marginTop:5,}}>Upcoming Events</Text>

          <View style={{marginTop: 20, paddingHorizontal:20, height:180}}>
            <ScrollView showsVerticalScrollIndicator={false}>

             {/* {tasks && tasks.map((task)=>(
                <View key={task.id}>
                  <CustomEvent text={task.title} type='REGULAR' date={task.deadline}/>

                </View>
             ))} 

              

              
              
            </ScrollView>
          </View>
        </View>*/}

       
    
    </SafeAreaView>
  );
      }
}


const styles= StyleSheet.create({

  search:{
    marginLeft: 25,
    marginRight: 25,
  
  },

  latest:{
    flexDirection: 'row',
    alignItems: 'center',
    
    
  }

})
