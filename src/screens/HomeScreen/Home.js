import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import CustomScrollItem from '../../components/CustomScrollItem/CustomScrollItem'
export default function Home() {
  const [notes, setNotes]= useState(null);

  

  return (
    <View>
        <Text style={{ fontSize:24,
        alignItems: 'center' }}>Tasks </Text>

        <ScrollView
        scrollEventThrottle={20}>
<View style={{flex:1, backgroundColor:'white', padding: 20}}>
          <Text style={{ fontSize:24, 
          fontWeight: 'bold', 
          paddingHorizontal: 20}}>
            Tasks to be completed
            </Text>


            <View style={{ height:130, marginTop: 20}}>
              <ScrollView>
                <CustomScrollItem imageUri={require('../../../assets/logo.png')} />
              </ScrollView>

            </View>
            </View>

        </ScrollView>
    
    </View>
  );
}
