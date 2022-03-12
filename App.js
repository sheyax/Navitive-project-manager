import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from  './src/screens/SigninScreen/Signin';
import Signup from  './src/screens/SignupScreen/Signup';
import Navigation from './src/navigation'
import Tabs from  './src/components/tabs'
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      <Tabs/>

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
