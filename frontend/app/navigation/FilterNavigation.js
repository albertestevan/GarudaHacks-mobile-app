import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import FilterScreen from '../containers/Filter';
import FilterLocationScreen from '../containers/FilterLocation';
import FilterPriceRangeScreen from '../containers/FilterPriceRange';
import FilterTagsScreen from '../containers/FilterTags';

const Stack = createStackNavigator();

export default function FilterNavigator({ navigation }) {

  return (
        <Stack.Navigator>
            <Stack.Screen name="Filter" component={FilterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="FilterLocation" component={FilterLocationScreen} options={{ headerTitle: "Filter Location" }}/>
            <Stack.Screen name="FilterPriceRange" component={FilterPriceRangeScreen} options={{ headerTitle: "Filter Price Range" }}/>
            <Stack.Screen name="FilterTags" component={FilterTagsScreen} options={{ headerTitle: "Filter Tags" }}/>
        </Stack.Navigator>
  );
}
