// AppointmentScheduleScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';

const teachersData = [
  {
    id: '1',
    name: 'Rasty Demicillo',
    edpCode: '50053',
    subject: 'IT-ELEC 1',
    picture: require('../assets/rasty.jpg'),
    availability: [
      { day: 'Monday', time: '10:00 AM - 12:00 PM' },
      { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
    ],
  },
  {
    id: '2',
    name: 'Engr. Virginia Verdun',
    edpCode: '50123',
    subject: 'IT-ELEC 2',
    picture: require('../assets/verdun.png'),
    availability: [
      { day: 'Monday', time: '10:00 AM - 12:00 PM' },
      { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
    ],
  },
  {
    id: '3',
    name: 'Ms. Jesieca Reyes',
    edpCode: '52153',
    subject: 'IT-PLATECH',
    picture: require('../assets/reyes.png'),
    availability: [
      { day: 'Monday', time: '10:00 AM - 12:00 PM' },
      { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
    ],
  },
  // Add more teachers as needed
];

const AppointmentScheduleScreen = ({ navigation }) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleAppointmentBooking = (teacher) => {
    setSelectedTeacher(teacher);
    navigation.navigate('AppointDetails', { teacher });
  };

  const renderTeacherItem = ({ item }) => (
    <TouchableOpacity
      style={styles.teacherContainer}
      onPress={() => handleAppointmentBooking(item)}
    >
      <Image source={item.picture} style={styles.teacherImage} />
      <Text style={styles.teacherName}>{item.name}</Text>
      <Text style={styles.teacherDetails}>{`EDP Code: ${item.edpCode} | Subject: ${item.subject}`}</Text>
      <Text style={styles.teacherDetails}>Availability:</Text>
      {item.availability.map((slot, index) => (
        <Text key={index} style={styles.teacherDetails}>
          {`${slot.day}: ${slot.time}`}
        </Text>
      ))}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CCS Faculty Instructors</Text>
      <FlatList
        data={teachersData}
        keyExtractor={(item) => item.id}
        renderItem={renderTeacherItem}
        style={styles.teacherList}
      />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5C2783',
  },
  teacherList: {
    width: '100%',
  },
  teacherContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
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
});

export default AppointmentScheduleScreen;
