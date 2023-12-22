// RegistrationFlow.js
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BasicInformationScreen from './BasicInformationScreen';
import UsernamePasswordScreen from './UsernamePasswordScreen';

const Stack = createStackNavigator();

const RegistrationFlow = () => {
  const [basicInfo, setBasicInfo] = useState({});
  const [credentials, setCredentials] = useState({});

  const handleBasicInfoNext = (data) => {
    setBasicInfo(data);
  };

  const handleRegister = (data) => {
    setCredentials(data);
    // Implement your final registration logic here using basicInfo and credentials
  };

  return (
    <Stack.Navigator initialRouteName="BasicInformation" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasicInformation">
        {(props) => <BasicInformationScreen {...props} onNext={handleBasicInfoNext} />}
      </Stack.Screen>
      <Stack.Screen name="UsernamePassword">
        {(props) => <UsernamePasswordScreen {...props} onRegister={handleRegister} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RegistrationFlow;
