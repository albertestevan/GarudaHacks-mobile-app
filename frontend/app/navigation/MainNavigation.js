import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import SearchScreen from '../containers/Search';
import ProfileScreen from '../containers/Profile';

import HomeNavigator from './HomeNavigation';

import { TouchableOpacity, View, Text, StyleSheet, AsyncStorage} from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tabs = createBottomTabNavigator();


class MainNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {


 };


  render() {
    // this.state = { menu_list };
    return (
      <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'ios-home';
                } else if (route.name === 'Search') {
                  iconName = 'ios-search';
                }
                else if (route.name === 'Profile') {
                  iconName = 'ios-person';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
            }}
          >
             <Tabs.Screen name="Home" component={HomeNavigator} />
              <Tabs.Screen name="Search" component={SearchScreen}/>
              <Tabs.Screen name="Profile" component={ProfileScreen}/>
          </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

export default MainNavigator;