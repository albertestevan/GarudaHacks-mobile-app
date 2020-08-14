import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import * as authActions from '../../store/actions/auth';

import { Icon, Container, Content, Left } from 'native-base';

import * as SecureStore from 'expo-secure-store';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};
const AuthScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const {navigation} = props;

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]); 

  const getInitial = useCallback( async () => 
    {
    const email = await SecureStore.getItemAsync('credentialsEmail');
    if (email){
      return email;
    }
    return null;
  },[]
  );

  const authHandler = async () => {
    let action;
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
    //   props.navigation.navigate('Shop');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    props.navigation.navigate('Home');
  };

  const inputChangeHandler = useCallback(
   (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <Container>
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
          <ScrollView>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
              callback={getInitial}
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              password
              minLength={8}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small"/>
              ) : 
              formState.formIsValid ? (
                <Button
                  title={'Login'}
                  onPress={authHandler}
                />
              ): (
                <Button
                title={'Login'}
                disabled
              />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={`Switch to Sign Up`}
                onPress={() => {
                    props.navigation.navigate('SignUp');
                }}
              />
            </View>
          </ScrollView>
    </KeyboardAvoidingView>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  buttonContainer: {
    marginTop: 10
  }
});

export default AuthScreen;