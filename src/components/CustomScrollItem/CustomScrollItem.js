import React from 'react';
import { Image, Text, View } from 'react-native';

export default function CustomScrollItem({props}) {
  return (
    <View style={{ height:130, width: 130, marginLeft:20, borderWidth:0.5 ,
        borderColor:'#ddddd'}}>

          <View style={{ flex:2,}}>
            <Image source={props.imageUri}
            style={{flex:1, height:null, width:null, resizeMode:'cover'}}
            />

          </View>

          <View style={{ flex:1, padding:10}}>
            <Text>{props.name}</Text>
          </View>
          
        </View>
  );
}
