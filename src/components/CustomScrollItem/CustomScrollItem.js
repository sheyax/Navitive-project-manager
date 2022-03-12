import React from 'react';
import { Image, Text, View } from 'react-native';

export default function CustomScrollItem({imageUri, name}) {
  return (
    <View style={{ height:200, width: 130, marginLeft:20, borderWidth:0.5 ,
        borderColor:'#ddddd', borderRadius:25}}>

          <View style={{ flex:2,}}>
            <Image source={imageUri}
            style={{flex:1, height:null, width:null, resizeMode:'cover'}}
            />

          </View>

          <View style={{ flex:1, padding:10}}>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
          </View>
          
        </View>
  );
}
