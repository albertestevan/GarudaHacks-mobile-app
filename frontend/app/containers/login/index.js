import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  // Button,
  ActivityIndicator,
  Alert,
  Text
} from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import * as authActions from '../../store/actions/auth';
import { Field,reduxForm } from 'redux-form';
import { Icon, Container, Content, Left, Button } from 'native-base';

import * as SecureStore from 'expo-secure-store';
import globalstyle from '../../globalstyle';
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
  const { handleSubmit, reset, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  // const {navigation} = props;

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
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    props.navigation.navigate('Me');
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
              style={{}}
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
            {isLoading ? (
              <ActivityIndicator size="small"/>
            ) : 
            formState.formIsValid ? (
              <Button block primary style={[globalstyle.marginBottomSm, globalstyle.marginTopLg, globalstyle.marginLeftMd, globalstyle.marginRightMd]}

              onPress={authHandler}>
              <Text>Login</Text>
            </Button>
            ): (
              <Button block primary disabled style={[globalstyle.marginBottomSm, globalstyle.marginTopLg, globalstyle.marginLeftMd, globalstyle.marginRightMd]}
              >
                <Text>Login</Text>
              </Button>
            )}
            <Button block primary style={[globalstyle.marginLeftMd, globalstyle.marginRightMd]}
              title={`Switch to Sign Up`}
              onPress={() => {
                  props.navigation.navigate('SignUp');
              }}
            >
              <Text>Don't have an account?</Text>
            </Button>
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