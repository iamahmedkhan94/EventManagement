import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/main';
// import AuthScreen from './src/screens/auth';
import {RootStackParamList} from '../screens/RootStackParams';
import CreateEvents from '../screens/main/CreateEvent';

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      >
        <Stack.Screen name="Main" component={MainScreen} options={{
            headerTitleAlign: 'center',
            title:'My Events Listing'
        }}/>
        <Stack.Screen name="CreateEvent" component={CreateEvents} options={{
            headerTitleAlign: 'center',
            title:'Create Event'
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}