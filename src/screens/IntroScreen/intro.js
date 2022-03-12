import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native'

export default function Intro(props) {



    const handleStarted=(props)=>{
        console.log('stareted')
        props.navigation.navigate('Signup')
    }

  return (
    <View style={styles.container}>

        <View style={styles.circle}>
            
        </View>
        <CustomButton text='Get Started' onPress={()=>handleStarted(props)} />
        <CustomButton text='Learn more about us'  type="TETIARY"/>

    </View>
  );

  /*return (
      <View style={styles.container}>
          <Text>Hello Intro</Text>
      </View>
  );*/
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding:20,
},

circle:{
    width: 200,
    height: 200,
    backgroundColor: '#E3E4E2',
    marginBottom: 100,
    marginTop: 50,
    borderRadius: 100
}
})
