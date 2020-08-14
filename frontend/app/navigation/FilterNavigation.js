import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import FilterScreen from '../containers/Filter';
import FilterLocationScreen from '../containers/FilterLocation';
import FilterPriceRangeScreen from '../containers/FilterPriceRange';

const Stack = createStackNavigator();

export default function FilterNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Filter" component={FilterScreen}/>
            <Stack.Screen name="FilterLocation" component={FilterLocationScreen}/>
            <Stack.Screen name="FilterPriceRange" component={FilterPriceRangeScreen}/>
        </Stack.Navigator>
  );
}
