import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  const [notes, setNotes]= useState(null);

  

  return (
    <View>
        <Text style={{ fontSize:24,
        alignItems: 'center' }}>This is the new screen for home </Text>
    
    </View>
  );
}
