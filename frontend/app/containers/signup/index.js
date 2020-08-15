import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Text
} from 'react-native';
import { useDispatch } from 'react-redux';
import globalstyle from '../../globalstyle';
import Input from '../../components/Input';
import * as authActions from '../../store/actions/auth';

import { Icon, Container, Content, Left, Button } from 'native-base';

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
      if(key !== 'referralId')
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
        password: '',
        confirmPassword: '',
    },
    inputValidities: {
      email: false,
      password: false,
      confirmPassword: false
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    if (formState.inputValues.confirmPassword !== formState.inputValues.password)
      {
        Alert.alert("Password must Match")
      }else{
        let action;
          action = authActions.signup(
            formState.inputValues.email,
            formState.inputValues.password,
            formState.inputValues.confirmPassword
          );
        setError(null);
        setIsLoading(true);
        try {
          await dispatch(action);
        } catch (err) {
          setError(err.message);
          setIsLoading(false);
          return;
        }
        setIsLoading(false);
        // props.navigation.navigate('Home');
        props.navigation.navigate('Login');
      }
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
  console.log(formState)
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
              // errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="confirmPassword"
              label="Confirm Password"
              keyboardType="default"
              secureTextEntry
              required
              password
              minLength={8}
              autoCapitalize="none"
              // errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            {/* <View style={styles.buttonContainer}> */}
              {isLoading ? (
                <ActivityIndicator size="small"/>
              ) : formState.formIsValid ? (
                <Button block primary style={[globalstyle.marginBottomSm, globalstyle.marginTopLg, globalstyle.marginLeftMd, globalstyle.marginRightMd]}
                onPress={authHandler}>
                <Text>Register</Text>
              </Button>
              ): (
                <Button block primary disabled style={[globalstyle.marginBottomSm, globalstyle.marginTopLg, globalstyle.marginLeftMd, globalstyle.marginRightMd]}
                  onPress={authHandler}>
                  <Text>Register</Text>
                </Button>
              )}
            <Button block primary style={[globalstyle.marginBottomSm, globalstyle.marginTopLg, globalstyle.marginLeftMd, globalstyle.marginRightMd]}
                onPress={() => {
                  props.navigation.navigate('Login');
              }}>
                  <Text>Already have an account?</Text>
                </Button>

          </ScrollView>
    </KeyboardAvoidingView>
    </Container>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
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