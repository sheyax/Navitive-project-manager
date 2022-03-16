import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import TabNav from '../../tabNavigation';
import CustomMultiLine from '../../components/CustomMultiLine/CustomMultiLine';
import CustomDateInput from '../../components/CustomDateInput/CustomDateInput';

export default function NewTask() {
  return (
    <View style={styles.container}>
        <Text style={styles.head}>New Task</Text>

        <CustomInput placeholder="Title"/>
        <CustomMultiLine placeholder='Description'/>

        <CustomDateInput />
    
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
