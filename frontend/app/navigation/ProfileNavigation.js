import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import ProfileScreen from '../containers/Profile';
import SettingNavigator from './SettingNavigation';


const Stack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Setting" component={SettingNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
  );
}
