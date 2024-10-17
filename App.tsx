import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Join us!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
          <Button
          title="Sign up"
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    // backgroundColor:'red'
    borderBlockColor: 'black'
  }, 
  button: {
    // backgroundColor:'blue'
  }
});
