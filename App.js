import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from  './src/screens/SigninScreen/Signin';
import Signup from  './src/screens/SignupScreen/Signup';
import Navigation from './src/navigation'
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E6E7',
    
  },
});
