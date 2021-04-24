import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import EventsListing from './EventsListing/EventsListing';
import {MainBottomTabParamList} from './MainBottomTabParams';
import EventsCalender from './EventsCalender/EventsCalender';


const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator >
   <BottomTab.Screen   name="EventsListing" component={EventsListing} options={{
     tabBarLabel: 'List View'
   }} />
      <BottomTab.Screen name="EventsCalender" component={EventsCalender} options={{
     tabBarLabel: 'Calendar View'
   }} />
    </BottomTab.Navigator>
  );
}

export default MainScreen;