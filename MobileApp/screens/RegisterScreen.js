// RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    if (password === confirmPassword) {
      // Registration successful
      Alert.alert('Registration successful');
    } else {
      // Passwords do not match
      Alert.alert('Registration failed', 'Passwords do not match');
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        onChangeText={(text) => setSurname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Middle Initial"
        onChangeText={(text) => setMiddleInitial(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="ID Number"
        onChangeText={(text) => setIdNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        onChangeText={(text) => setCourse(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        onChangeText={(text) => setYear(text)}
      />

      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.buttonTextRegister}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backToLogin} onPress={navigateToLogin}>
        <Text style={styles.backToLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 5,
    paddingLeft: 8,
    width: '100%',
    fontSize: 15,
  },
  buttonRegister: {
    backgroundColor: '#5C2783',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginVertical: 10,
  },
  buttonTextRegister: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '350',
  },
  backToLogin: {
    marginTop: 10,
  },
  backToLoginText: {
    color: '#5C2783',
    fontSize: 16,
  },
});

export default RegisterScreen;
