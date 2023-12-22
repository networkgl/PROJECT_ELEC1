// App.js
import "react-native-gesture-handler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard';
import LoginScreen from './screens/LoginScreen';
import RegistrationFlow from './screens/RegistrationFlow';
import BuyShirt from './screens/BuyShirt';
import OrderSummary from './screens/OrderSummary';
import AppointSchedule from './screens/AppointSchedule';
import AppointDetails from './screens/AppointDetails';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>


<Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'CONNECT',
            headerStyle: {
              backgroundColor: '#5C2783',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="RegistrationFlow"
          component={RegistrationFlow}
          options={{
            title: 'Registration Flow',
            headerStyle: {
              backgroundColor: '#5C2783', // Set the background color of the header
            },
            headerTintColor: 'white', // Set the text color of the header
          }}
        />


      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#5C2783', // Set the background color of the header
          },
          headerTintColor: 'white', // Set the text color of the header
          headerTitleStyle: {
            color: 'white', // Set the color of the header title
          },
          headerTitleAlign: 'center', // Center the header title
          headerRight: () => (
            <StatusBar barStyle="light-content" backgroundColor="#5C2783" /> // Set the status bar color
          ),
        }}
      />



         
        <Stack.Screen
          name="BuyShirt"
          component={BuyShirt}
          options={{
            title: 'BuyShirt',
            headerStyle: {
              backgroundColor: '#5C2783', // Set the background color of the header
            },
            headerTintColor: 'white', // Set the text color of the header
            headerTitleStyle: {
              color: 'white', // Set the color of the header title
            },
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => (
              <StatusBar barStyle="light-content" backgroundColor="#5C2783" /> // Set the status bar color
            ),
          }}
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummary}
          options={{
            title: 'Order Summary',
            headerStyle: {
              backgroundColor: '#5C2783', // Set the background color of the header
            },
            headerTintColor: 'white', // Set the text color of the header
            headerTitleStyle: {
              color: 'white', // Set the color of the header title
            },
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => (
              <StatusBar barStyle="light-content" backgroundColor="#5C2783" /> // Set the status bar color
            ),
          }}
        />

        <Stack.Screen
          name="AppointSchedule"
          component={AppointSchedule}
          options={{
            title: 'AppointSchedule',
            headerStyle: {
              backgroundColor: '#5C2783', // Set the background color of the header
            },
            headerTintColor: 'white', // Set the text color of the header
            headerTitleStyle: {
              color: 'white', // Set the color of the header title
            },
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => (
              <StatusBar barStyle="light-content" backgroundColor="#5C2783" /> // Set the status bar color
            ),
          }}
        />

        <Stack.Screen
          name="AppointDetails"
          component={AppointDetails}
          options={{
            title: 'AppointDetails',
            headerStyle: {
              backgroundColor: '#5C2783', // Set the background color of the header
            },
            headerTintColor: 'white', // Set the text color of the header
            headerTitleStyle: {
              color: 'white', // Set the color of the header title
            },
            headerTitleAlign: 'center', // Center the header title
            headerRight: () => (
              <StatusBar barStyle="light-content" backgroundColor="#5C2783" /> // Set the status bar color
            ),
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
