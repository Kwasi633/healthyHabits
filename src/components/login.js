import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  Button,
} from 'react-native';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/logInStyles';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  '248180b4-e828-4e7e-83cf-6240fa9cb41a', // Parse App ID
  'b3a0062a-f60c-4fc9-9be9-53a94887230b', // Parse Javascript Key
);
Parse.serverURL = 'http://192.168.43.213:1337/parse'; // Add your computer's IP address

const LogIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const user = await Parse.User.logIn(username, password);
      console.log('Logged in successfully!', user);
      navigation.navigate('GiftedChat');
    } catch (error) {
      console.log('Error logging in:', error);
      setError('Error logging in: ' + error.code + ' ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image source={require('../images/discuss.jpg')} style={styles.logo} />
        <View style={styles.account}>
          <Text style={styles.title}>Log In</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your username"
              placeholderTextColor={'black'}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your password"
              placeholderTextColor={'black'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity style={styles.customBotton} onPress={handleLogin}>
              <Text style={styles.textt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
              <Text style={styles.signText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('NewUser')}>
                <Text style={[styles.signText, styles.signupLink]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LogIn;
