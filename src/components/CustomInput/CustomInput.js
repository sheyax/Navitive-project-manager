import React ,{useState} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({placeholder, value, setValue,secureTextEntry}) {
    const [task , setTask] =useState('')



  return (
    <View style={styles.container}>

        <TextInput placeholder={placeholder} style={styles.input}
        value={value} onChangeText={setValue} secureTextEntry={secureTextEntry}/>
    
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
        padding: 10,
        marginVertical: 10
    },

    input:{

    }
})
