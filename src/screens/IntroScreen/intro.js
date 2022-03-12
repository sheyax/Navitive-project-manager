import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native'
export default function Intro() {

    const navigation = useNavigation();

    const handleStarted= () =>{
        console.log('get started')
        navigation.navigate('Home')
    }

    const handleLearnMore= ()=>{
        console.log('learn more')

    }


  return (
    <View style={styles.container}>

        <View style={styles.circle}>
            
        </View>
        <CustomButton text='Get Started' onPress={handleStarted}/>
        <CustomButton text='Learn more about us' onPress={handleLearnMore} type="TETIARY"/>

    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
},

circle:{
    width: 100,
    height: 100,
    backgroundColor: '#E3E4E2',
    marginBottom: '100px',
    marginTop: '50px'
}
})
