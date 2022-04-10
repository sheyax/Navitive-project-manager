import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

export default function CustomProfile({imageUri, profileName, profileRank}) {
  return (
    <SafeAreaView style={styles.container}>

        <Image style={styles.profilepic} uri={imageUri}/>
        <View>
            <Text style={styles.profilename}>{profileName}</Text>
            <Text style={styles.profilerank}>{profileRank}</Text>
        </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,

},

profilepic:{
  height: 50,
  width: 50,
  borderRadius: 50,
  borderWidth:0.8,
  marginRight: 10,
  backgroundColor: '#FFFFFF',

},

profilename:{
  fontWeight:"700",
  fontSize: 20
},

profilerank:{
  fontSize: 14
}


})
