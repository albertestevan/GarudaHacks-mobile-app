import React, { useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';
import { View, ActivityIndicator } from 'react-native';
import * as authActions from '../store/actions/auth';
import * as SecureStore from 'expo-secure-store';
// import * as authActions from '../utils/auth';

import HomeScreen from "../containers/home"
import SignUpScreen from "../containers/signup/index";
import LoginScreen from "../containers/login/index";
import CameraWrapper from "../containers/CameraWrapper";
import { useDispatch } from 'react-redux';


import { useSelector } from 'react-redux';
const Stack = createStackNavigator();

export default function HomeNavigator({ navigation }) {
  const dispatch = useDispatch();
  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
  useEffect(() => { 
    console.log("getting key")
    getToken();
  });
  const getToken = async () => {
    //if key exist in local storage
    const token = await SecureStore.getItemAsync('userToken');
    if (token) {
      try {
        console.log("token", token)
        let action;
        action = authActions.authenticate(
          token
        );
        await dispatch(action);
      } catch (err) {
        return;
      }
    }
  };

  return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login', headerShown: true}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: 'Sign Up', headerShown: true}}/>
            <Stack.Screen name="CameraWrapper" component={CameraWrapper} options={{title: 'Media', headerShown: true}}/>
        </Stack.Navigator>
  );
}
