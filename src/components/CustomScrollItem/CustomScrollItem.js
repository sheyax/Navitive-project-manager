import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline'
import axios from 'axios'

import {useNavigation} from '@react-navigation/native'


export default function CustomScrollItem({imageUri, title, category, deadline,details, tasks }) {

  const navigation = useNavigation();
 

  const onClick= () => {
        navigation.navigate('ProjectDetailScreen',{ 
          title: title,
          deadline: deadline,
          details: details,
          tasks: tasks
        } )
  }

  

  

  return (

    <TouchableOpacity onPress={onClick}>
      
    <View style={styles.container}>

          <View style={styles.flexa}>
            
           <Text style={styles.title}>{title}</Text>

           <Text style={styles.category}>{category}</Text>

           <View style={styles.dateContainer}>
             <ClockIcon style={styles.dateIcon}/>
             <Text style={styles.dateText}>{deadline}</Text>
           </View>
          </View>

          <View style={styles.progressBar}>
            <Text style={styles.progressText}>Progress</Text>
          </View>
          
        </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight:'bold',
    paddingTop: 30,
    paddingHorizontal: 16,
    
  },
   container:{
    height:200, 
    width: 350, 
    margin:'auto', 
    marginTop: 25, 
    borderRadius:10,
    backgroundColor: '#fff'
   },

   category:{
     paddingHorizontal: 16,
     fontSize: 14,
     marginTop: 15,


   },
   dateContainer:{
     backgroundColor: '#CDCDCD',
     marginLeft: 10,
     marginTop: 1,
     height:40,
     width: 180, 
     borderRadius: 10,
     flexDirection: 'row',
     alignItems: 'center',
     

   },
   dateIcon:{
     width: 30,
     height: 30,
     color: '#5C5C5C',
     marginLeft: 5,
     marginRight: 5,
   },

   progressBar:{
     backgroundColor:'#5E85E1',
     height: 65,
     marginTop: 10,
   },

   progressText: {
     color:'#E4E2E2',
     paddingHorizontal: 16,
     paddingTop: 16
   }


})
