import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import CustomEvent from '../../components/CustomEvent';
import CustomScrollItem from '../../components/CustomScrollItem/CustomScrollItem'
export default function Home() {
  const [notes, setNotes]= useState(null);

  

  return (
    <View >
      

        <ScrollView
        scrollEventThrottle={20}>
<View style={{flex:1, padding: 20}}>
          <Text style={{ fontSize:24, 
          fontWeight: 'bold', 
          marginTop:20,
          paddingHorizontal: 20}}>
            Tasks to be completed
            </Text>


            <View style={{ height:200, marginTop: 20}}>
              <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 1' />

                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 2' />

                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 3' />

                <CustomScrollItem imageUri={require('../../../assets/logo.png')} name='Task 4' />
              </ScrollView>

            </View>
            </View>

        </ScrollView>

        <View style={{marginTop:5, padding:20}}>
          <Text style={{fontSize:24, fontWeight:'bold', paddingHorizontal:20}}>Upcoming Events</Text>

          <View style={{marginTop: 20, paddingHorizontal:20, height:300}}>
            <ScrollView showsVerticalScrollIndicator={false}>

              <CustomEvent text='Commandant dinner with staff' type='REGULAR'/>

              <CustomEvent text='Chief visit to unit' type='URGENT'/>

              <CustomEvent text='Chief visit to unit' />

              <CustomEvent text='Chief visit to unit' type='REGULAR'/>

              <CustomEvent text='Chief visit to unit' type='URGENT'/>

              <CustomEvent text='Chief visit to unit' type='URGENT'/>
              
            </ScrollView>
          </View>
        </View>
    
    </View>
  );
}
