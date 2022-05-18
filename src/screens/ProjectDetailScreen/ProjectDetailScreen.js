import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames'




export default function ProjectDetailScreen() {

  const route= useRoute();

  console.log(route.params.tasks)
    
  return (
    <SafeAreaView style={tw``}>
      <View style={tw`p-5 bg-gray-400`}>
        <Text style={tw`pt-10 text-xl font-bold `}> Project Details</Text>

        <Text style={tw`pt-5 text-white`}>Progress</Text>

      </View>

      <View style={tw`mt-5 p-5`}>
      <Text style={tw` font-bold text-lg `}>{route.params.title}</Text>
      <Text style={tw`mt-3 text-gray-500`}>Due Date: {route.params.deadline}</Text>

      <View style={tw`mt-5`}>
        <Text style={tw`font-bold text-base`}>Description</Text>
        <Text style={tw`mt-3`}>{route.params.details}</Text>
       
      </View>

      </View>

      <View style={tw`mt-2 p-5`}>
        <Text style={tw`font-bold text-base `}>Tasks</Text> 
        <ScrollView showsVerticalScrollIndicator={false}>
      {route.params.tasks && route.params.tasks.map(task =>(
          <View key={task._id}>
          <TouchableOpacity style={tw`flex-row justify-between mt-5 border-2 p-5 rounded-lg`}
          
          onPress={ () => {
            
            if (task.checked != true) {
              task.checked= true
            }else{
              task.checked= false
            }
            
            console.log(task.checked)
            }}
          >
            <Text style={tw``}>{task.task}</Text>
            <View style={[tw`h-5 w-5 bg-blue-300`, task.checked== true ? tw`h-5 w-5 bg-green-300` : tw`h-5 w-5 bg-red-300` ]}></View>
            
            </TouchableOpacity> 
          </View>
        ))}
        </ScrollView>
      </View>
      
     </SafeAreaView>
  );
}
