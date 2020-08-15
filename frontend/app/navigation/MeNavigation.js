import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import MeScreen from '../containers/Me';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignUpScreen';

import CreateProfileScreen from '../containers/CreateProfile';

import ProfileNavigator from './ProfileNavigation';

const Stack = createStackNavigator();

export default function SettingNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Me" component={MeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: "Login", headerShown: true }}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitle: "Sign Up", headerShown: true }}/>
            <Stack.Screen name="CreateProfile" component={CreateProfileScreen} options={{ headerTitle: "Create Profile", headerShown: true }}/>
            <Stack.Screen name="Profile" component={ProfileNavigator} options={{ headerShown: false, gestureEnabled: false }}/>
        </Stack.Navigator>
  );
}
