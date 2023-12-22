import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UsernamePasswordScreen = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    // Validate password length
    if (password.length < 6) {
      Alert.alert('Registration failed', 'Password must be at least 6 characters long');
      return;
    }
  
    // Validate password match
    if (password !== confirmPassword) {
      Alert.alert('Registration failed', 'Passwords do not match');
      return;
    }
  
    if (username.length <= 0) {
      Alert.alert('Registration failed', 'Please provide username');
      return;
    }
  
    // Registration successful
    onRegister({ username, password });
  
    // Show success message with onDismiss callback
    Alert.alert(
      'Registration successful',
      'Your account has been created successfully',
      [{ text: 'OK', onPress: () => navigation.navigate('Login')
    }]
    );
  };
  

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/uc.png')} style={styles.logo} />
      </View>

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
          <Text style={styles.visibilityButtonText}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.buttonTextRegister}>Register</Text>
      </TouchableOpacity>

      {/* Back to Login Button */}
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -230,
  },
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
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
  buttonRegister: {
    backgroundColor: '#5C2783',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTextRegister: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
  backToLogin: {
    marginTop: 10,
  },
  backToLoginText: {
    color: '#5C2783',
    fontSize: 16,
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

export default UsernamePasswordScreen;
