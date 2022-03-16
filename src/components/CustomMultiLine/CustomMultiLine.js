import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

export default function CustomMultiLine({placeholder, value, setValue }) {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder={placeholder} 
        multiline={true}
        numberOfLines={4}
        value={value} onChangeText={setValue}
         maxLength={500} />
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft:10,
        marginVertical:2
    },

    input:{
height:100,

    }
})
