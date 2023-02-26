import { Alert, Button, StyleSheet } from 'react-native';
import axios from 'axios'
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import React, { useState } from 'react';
import {  TextInput, TouchableOpacity } from 'react-native';
import { response } from 'express';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const credentials = {username,password}
  const test = (credentials: any) => {
    const url = 'http://localhost:5000/auth/'
    axios.post(url,credentials)
    .then((response)=>{
      const result = response.data
      const {id,email,password} = result
      Alert.alert("yay","login successful")
    }).catch(error => {
      console.log(error.JSON)
      Alert.alert("nay","login unsuccessful")
      
    })
    
  }
  const handleLogin = async () =>{
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;