import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeParamlist, OrderParamlist } from '../types';
import { OrderAdd, OrderEdit } from '../screens/Order';


const Stack = createNativeStackNavigator<OrderParamlist>();

export default function OrderNavigator() {
  return (
    <Stack.Navigator 
     screenOptions={{
       headerShown:false,
     }}
    >
      <Stack.Screen 
      name="OrderAdd" 
      component={OrderAdd} />

    <Stack.Screen 
      name= "OrderEdit" 
      component={OrderEdit} />
      </Stack.Navigator>

  );
}