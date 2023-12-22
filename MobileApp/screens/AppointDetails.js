import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppointmentDetailsScreen = ({ route }) => {
  const { teacher } = route.params;
  const [preferredTime, setPreferredTime] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [shortMessage, setShortMessage] = useState('');
  const navigation = useNavigation();

  const handleBookAppointment = () => {
    if (!preferredTime || !preferredDay || !shortMessage) {
      Alert.alert('Validation Error', 'Please fill in all fields before booking.');
      return;
    }

    Alert.alert(
      'Confirm Booking',
      `Do you want to book an appointment with ${teacher.name} at ${preferredTime} on ${preferredDay}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => saveBooking(),
        },
      ]
    );
  };

  const saveBooking = () => {
    // Logic to save the booking
    setTimeout(() => {
      Alert.alert(
        'Booking Saved',
        `Your appointment with ${teacher.name} at ${preferredTime} on ${preferredDay} has been booked successfully. Message: ${shortMessage}`,
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.innerContainer}>
          {/* <Text style={styles.title}>Appointment Details</Text> */}
          <View style={styles.detailsContainer}>
            <Image source={teacher.picture} style={styles.teacherImage} />
            <Text style={styles.teacherName}>{teacher.name}</Text>
            <Text style={styles.teacherDetails}>{`EDP Code: ${teacher.edpCode}`}</Text>
            <Text style={styles.teacherDetails}>{`Subject: ${teacher.subject}`}</Text>
            <Text style={styles.teacherDetails}>Availability:</Text>
            {teacher.availability.map((slot, index) => (
              <Text key={index} style={styles.teacherDetails}>
                {`${slot.day}: ${slot.time}`}
              </Text>
            ))}
          </View>

          <Text style={styles.label}>Preferred Consultation Time:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter preferred time"
            value={preferredTime}
            onChangeText={(text) => setPreferredTime(text)}
          />

          <Text style={styles.label}>Preferred Consultation Day:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter preferred day"
            value={preferredDay}
            onChangeText={(text) => setPreferredDay(text)}
          />

          <Text style={styles.label}>Short Message:</Text>
          <TextInput
            style={styles.messageInput}  
            placeholder="Type a short message"
            value={shortMessage}
            onChangeText={(text) => setShortMessage(text)}
            multiline
          />

          <TouchableOpacity style={styles.bookButton} onPress={handleBookAppointment}>
            <Text style={styles.bookButtonText}>Book Appointment</Text>
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
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5C2783',
  },
  detailsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  teacherImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C2783',
    marginBottom: 5,
  },
  teacherDetails: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5C2783',
    alignSelf: 'flex-start',
    marginLeft: 40,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    fontSize: 15,
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: '#5C2783',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5C2783',
    alignSelf: 'flex-start',
    marginLeft: 40,
  },
  messageInput: {
    height: 80,  // Adjusted height
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    fontSize: 15,
    marginBottom: 20,
  },
});
export default AppointmentDetailsScreen;
