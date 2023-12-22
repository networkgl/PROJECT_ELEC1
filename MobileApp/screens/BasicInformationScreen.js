import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BasicInformationScreen = ({ onNext }) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');

  const navigateToUserPass = () => {
    navigation.navigate('UsernamePassword');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/uc.png')} style={styles.logo} />
          </View>

          {/* First Name Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          {/* Surname Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Surname</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your surname"
              onChangeText={(text) => setSurname(text)}
            />
          </View>

          {/* Middle Initial Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Middle Initial</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your middle initial"
              onChangeText={(text) => setMiddleInitial(text)}
            />
          </View>

          {/* ID Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ID Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your ID number"
              onChangeText={(text) => setIdNumber(text)}
              keyboardType="numeric"
            />
          </View>

          {/* Course Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Course</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your course"
              onChangeText={(text) => setCourse(text)}
            />
          </View>

          {/* Year Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Year</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your year"
              onChangeText={(text) => setYear(text)}
            />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={styles.buttonNext}
            onPressIn={navigateToUserPass}
            onPress={() => onNext({ firstName, surname, middleInitial, idNumber, course, year })}
          >
            <Text style={styles.buttonTextNext}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 180, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain', // Maintain aspect ratio
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
  buttonNext: {
    backgroundColor: '#5C2783',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    height: 50,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginTop: 10,
  },
  buttonTextNext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default BasicInformationScreen;
