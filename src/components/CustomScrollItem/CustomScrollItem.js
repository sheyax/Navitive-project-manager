import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline'

import {useNavigation} from '@react-navigation/native'


export default function CustomScrollItem({imageUri, name}) {

  const navigation = useNavigation();

  const onClick= () => {
        navigation.navigate('ProjectDetailScreen')
  }
  return (

    <TouchableOpacity onPress={onClick}>
    <View style={styles.container}>

          <View style={styles.flexa}>
           <Text style={styles.title}>C-130 72 hour inspection</Text>

           <Text style={styles.category}>Avionics, Powerplant, Airframe</Text>

           <View style={styles.dateContainer}>
             <ClockIcon style={styles.dateIcon}/>
             <Text style={styles.dateText}>March 24, 2022</Text>
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
    fontSize: 30,
    fontWeight:'bold',
    paddingTop: 30,
    paddingHorizontal: 16,
    
  },
   container:{
    height:280, 
    width: 260, 
    marginLeft:20,  
    borderRadius:10,
    backgroundColor: '#fff'
   },

   category:{
     paddingHorizontal: 16,
     fontSize: 18,
     marginTop: 15,


   },
   dateContainer:{
     backgroundColor: '#CDCDCD',
     marginLeft: 16,
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
