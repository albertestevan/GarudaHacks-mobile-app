import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import SearchScreen from '../containers/Search';
import FilterNavigator from './FilterNavigation';

const Stack = createStackNavigator();

export default function SearchNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Filter" component={FilterNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
  );
}
