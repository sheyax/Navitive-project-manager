import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


export default function EventDetail() {

    const [info, setInfo]= useState([]);

    const fetchData = async () => {
        const resp = await fetch("https://elenu1.herokuapp.com/Tasks");
        const data = await resp.json();
        setInfo(data.title);
      };
console.log(info)
      fetchData()
  return (
    <View>
      <Text>{info}</Text>
     </View>
  );
}
