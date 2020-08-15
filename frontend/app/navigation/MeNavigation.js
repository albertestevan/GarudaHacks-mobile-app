import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import MeScreen from '../containers/Me';
import EditProfileScreen from '../containers/EditProfile';
import SignUpScreen from '../containers/SignUpScreen';

import ProfileNavigator from './ProfileNavigation';

const Stack = createStackNavigator();

export default function SettingNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Me" component={MeScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Login" component={EditProfileScreen} options={{ headerTitle: "Login", headerShown: true }}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitle: "Sign Up", headerShown: true }}/>
            <Stack.Screen name="Profile" component={ProfileNavigator} options={{ headerTitle: "Profile", headerShown: true }}/>
        </Stack.Navigator>
  );
}
