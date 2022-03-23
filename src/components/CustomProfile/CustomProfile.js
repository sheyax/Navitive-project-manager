import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function CustomProfile({imageUri, profileName, profileRank}) {
  return (
    <View style={styles.container}>

        <Image style={styles.profilepic} uri={imageUri}/>
        <View>
            <Text style={styles.profilename}>{profileName}</Text>
            <Text style={styles.profilerank}>{profileRank}</Text>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
container: {

    padding:30,
    flexDirection: 'row'

},

profilepic:{
  height: 60,
  width: 60,
  borderRadius: 50,
  borderWidth:0.8,
  marginRight: 10,

},

profilename:{
  fontWeight:700,
  fontSize: 25
},

profilerank:{
  fontsize: 18
}


})
