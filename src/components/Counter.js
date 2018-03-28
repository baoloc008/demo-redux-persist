import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'black',
    fontSize: 40,
    alignSelf: 'center'
  },
  button: {
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  textInput: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  secondText: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center'
  },
  title: {
    color: 'black',
    fontSize: 50,
    alignSelf: 'center'
  }
});

export default class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>COUNTER</Text>
        <TextInput placeholder="Enter your name" style={styles.textInput} />
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.secondText}>Your name is: null</Text>
        <Text style={styles.secondText}>Logged in: false</Text>
        <Text style={styles.text}>0</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
