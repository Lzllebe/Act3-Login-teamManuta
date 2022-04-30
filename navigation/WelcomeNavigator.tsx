import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/Welcome';
import { WelcomeParamlist } from '../types';

const Stack = createNativeStackNavigator<WelcomeParamlist>();

export default function WelcomeNavigator() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown:false,
     }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
  );
}