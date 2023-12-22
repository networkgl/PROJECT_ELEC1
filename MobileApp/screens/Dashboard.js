// Updated Dashboard component

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleContainerClick = (label) => {
    if (label === 'Container 1') {
      navigation.navigate('BuyShirt');
    } else if (label === 'Container 2') {
      // Navigate to AppointSchedule screen
      navigation.navigate('AppointSchedule');
    } else {
      // alert(`Clicked on container with label: ${label}`);
    }
  };

  // Dummy data for announcements
  const announcements = [
    { id: '1', title: 'Christmas Holiday 2023', description: 'Wishing students a joyful and restful Christmas with loved ones!' },
    { id: '2', title: 'Enrollment SY. 2023-2024', description: 'Enrollment for the College of Computer Studies 2023-2024 is open! Join us for a journey of innovation and exciting opportunities! ' },
    { id: '3', title: 'Signing of clearance', description: 'Sign your clearance for CCS now to secure your spot for the upcoming academic year! ' },
    { id: '4', title: 'CCS Intramurals 2023', description: 'Get ready for CCS Intramurals—showcase your skills and team spirit! ' },

    // Add more announcements as needed
  ];

  // Render item for FlatList
  const renderAnnouncementItem = ({ item }) => (
    <TouchableOpacity
      style={styles.announcementContainer}
      onPress={() => handleContainerClick(`Announcement_${item.id}`)}
    >
      <Text style={styles.announcementTitle}>{item.title}</Text>
      <Text style={styles.announcementDescription}>{item.description}</Text>
    </TouchableOpacity>
  );
  const renderHeaderLeft = () => (
    <View style={styles.headerLeft}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/menu.png')} // Replace with the actual source of the profile picture
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: renderHeaderLeft, // Remove the default back button
      headerRight: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>


      
      {/* Top Row */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => handleContainerClick('Container 1')}
        >
          <Image source={require('../assets/cart.png')} style={styles.icon} />
          <Text style={styles.containerText}>Buy Shirt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => handleContainerClick('Container 2')}
        >
          <Image source={require('../assets/calendar.png')} style={styles.icon} />
          <Text style={styles.containerText}>Appoint Schedule</Text>
        </TouchableOpacity>
      </View>

      {/* Announcements Container */}
      <View style={styles.announcementsContainer}>
        <Text style={styles.announcementLabel}>Announcements</Text>
        <FlatList
          data={announcements}
          keyExtractor={(item) => item.id}
          renderItem={renderAnnouncementItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    paddingTop: 40, // Add padding at the top if needed
    // backgroundColor: '#5C2783', // Consistent background color
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  logoutIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 20, // Add bottom margin to create space between rows
  },
  containerItem: {
    flex: 1,
    aspectRatio: 1.3, // Maintain aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Add border radius
    backgroundColor: 'white', // Consistent background color
    overflow: 'hidden', // Disable border lines by hiding overflow
    margin: 5, // Add top and bottom margin if needed
  },
  containerText: {
    color: '#5C2783',
    fontWeight: 'bold',
    marginTop: 5, // Adjust margin to position text below the image
  },
  announcementsContainer: {
    flex: 1,
    width: '92%',
    backgroundColor: 'white', // Consistent background color
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  announcementLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5C2783', // Consistent text color
    backgroundColor: 'white',
    textAlign: 'justify', // Add this line for justified text
    // paddingTop: 10,
    // borderRadius: 10,
  },
  announcementContainer: {
    backgroundColor: '#ECF0F1', // Adjusted background color
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#5C2783', // Consistent text color
  },
  announcementDescription: {
    fontSize: 14,
    color: '#666', // Gray text color
  },
  icon: {
    width: 80, // Adjust width as needed
    height: 80, // Adjust height as needed
    marginBottom: 10, // Add margin between the image and text if needed
  },
});

export default Dashboard;
