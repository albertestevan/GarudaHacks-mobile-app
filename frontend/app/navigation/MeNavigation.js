import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { View, ActivityIndicator } from 'react-native';

import * as SecureStore from 'expo-secure-store';
import MeScreen from '../containers/Me';
// import LoginScreen from '../containers/LoginScreen';
// import SignUpScreen from '../containers/SignUpScreen';

import SignUpScreen from "../containers/signup/index";
import LoginScreen from "../containers/login/index";

import CreateProfileScreen from '../containers/CreateProfile';

import ProfileNavigator from './ProfileNavigation';

import { useDispatch } from 'react-redux';
const Stack = createStackNavigator();

export default function SettingNavigator({ navigation }) {
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
            <Stack.Screen name="Me" component={MeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: "Login", headerShown: true }}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitle: "Sign Up", headerShown: true }}/>
            <Stack.Screen name="CreateProfile" component={CreateProfileScreen} options={{ headerTitle: "Create Profile", headerShown: true }}/>
            <Stack.Screen name="Profile" component={ProfileNavigator} options={{ headerShown: false, gestureEnabled: false }}/>
        </Stack.Navigator>
  );
}
