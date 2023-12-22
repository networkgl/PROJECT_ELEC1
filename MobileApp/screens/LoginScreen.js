import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    if (username === '' && password === '' || username === 'admin' && password === '12345678') {
      Alert.alert('Login successful');
      navigateToDashboard();
    } else {
      Alert.alert('Login failed', 'Invalid username or password');
    }
  };

  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const navigateToRegisterFlow = () => {
    navigation.navigate('RegistrationFlow'); // Navigate to the multi-step registration flow
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityButton}>
          <Text style={styles.visibilityButtonText}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonTextLogin}>Login</Text>
      </TouchableOpacity>

      {/* Register Section */}
      <View style={styles.textContainer}>
        <Text style={styles.textNote}>Don't have an account?</Text>

        <TouchableOpacity onPress={navigateToRegisterFlow}>
          <View style={styles.textRegisterContainer}>
            <Text style={styles.textRegister}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  logo: {
    width: 200,
    height: 200,
    marginTop: -170,
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    marginBottom: 5,
    color: '#5C2783',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    width: '100%',
    fontSize: 15,
  },
  buttonLogin: {
    backgroundColor: '#5C2783',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  buttonTextLogin: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
  textContainer: {
    flexDirection: 'row', // Arrange children in a row
    alignSelf: 'flex-start',
    paddingTop: 50,
  },
  textNote: {
    color: 'gray',
    textAlign: 'left',
    alignSelf: 'flex-start', // Align the text to the start of the container
    paddingRight: 5, // Add some space on the right to separate from the "Register" text
  },
  textRegisterContainer: {
    marginLeft: 5, // Add some space between the texts
  },
  textRegister: {
    color: '#5C2783',
    // textDecorationLine: 'underline', // Optionally, add underline styling
  },
  visibilityButton: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  visibilityButtonText: {
    color: '#5C2783',
    fontSize: 16,
  },
});


export default LoginScreen;
