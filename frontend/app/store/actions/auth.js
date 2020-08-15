import { AsyncStorage } from 'react-native';
// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
import * as SecureStore from 'expo-secure-store';

// Local storage
//  secureStore- keeps token securely, we have two keys for token:
//
//    userToken-stores current token, until user signsout. We check for this to see if 
//    the user is still signed in or not. If empty user is not signed in.
//
//    credentials - a set of 3 secureStores where we keep the email/password and token altogether. 
//    whenever a user logs in, we shall compare it with the saved email of the last user, if its 
//    the same then we shall check if it has same password, then if both email and password are same
//    we authentuicate it with the stored token's value.
//
//    if not the same email, we shall call API, of success, save that as the the new credentials


export const authenticate = (token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const signup = (email, password) => {
  console.log("signup", email, password);
  return async dispatch => {
    const response = await fetch(
      'http://165.227.25.15/api/user/signup/',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ');
       // ADD THIS THROW error
        throw error;
      });

    const resData = await response.json();
    if (resData.error || resData.detail) {
        let message = resData.error || resData.detail;
        console.log(resData.error);
        throw new Error(message);
    }
    console.log("token signup", resData);
  };
};

export const login = (email, password) => {
  return async dispatch => {

    let message = 'Wrong Password! Please try again.'
    //get credentials from local
    const credentialsEmail = await SecureStore.getItemAsync('credentialsEmail');
    //if email is the same as the last user, compare password with local password
    //if identical, set auth with key from last user.
    if ( credentialsEmail && email == credentialsEmail){
      const credentialsPassword = await SecureStore.getItemAsync('credentialsPassword');
      if (password !== credentialsPassword){
        throw new Error(message);
      }
      const credentialsToken = await SecureStore.getItemAsync('credentialsToken');
      //set userToken
      await SecureStore.setItemAsync('userToken', credentialsToken);
      dispatch(
        authenticate(
          credentialsToken
        )
      );

    } else{

      const response = await fetch(
        `http://165.227.25.15/api/user/signin/`,
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ) .catch(function(error) {
        console.log("There has been a problem with your fetch operation: ");
        // ADD THIS THROW error
          throw error;
        });

      const resData = await response.json();
      if (resData.error || resData.detail) {
        let err = resData.error || resData.detail;
        message = '';
        console.log(resData.error);
        console.log(resData.detail);
        if (err == 'crypto/bcrypt: hashedPassword is not the hash of the given password') {
          message = "Wrong Password! Please try again.";
        } else{
          message = resData.error;
        }
        throw new Error(message);
      }
      console.log('response', resData)
      await SecureStore.setItemAsync('credentialsEmail', email);
      await SecureStore.setItemAsync('credentialsPassword', password);
      await SecureStore.setItemAsync('credentialsToken', resData.token);
      // //token for operations
      await SecureStore.setItemAsync('userToken', resData.token);

      dispatch(
        authenticate(
          resData.token
        )
      );

    }
  };
};

export const signOut = () => {
  SecureStore.deleteItemAsync('userToken');
  return { type: LOGOUT };
};