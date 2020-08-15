import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import SettingScreen from '../containers/Setting';
import EditProfileScreen from '../containers/EditProfile';
import ManagePlansScreen from '../containers/ManagePlans';

const Stack = createStackNavigator();

export default function SettingNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerTitle: "Edit Profile", headerShown: true }}/>
            <Stack.Screen name="ManagePlans" component={ManagePlansScreen} options={{ headerTitle: "Manage Plans", headerShown: true }}/>
        </Stack.Navigator>
  );
}
