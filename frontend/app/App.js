import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { registerRootComponent, AppLoading } from 'expo';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import authReducer from './store/reducers/auth';
import MainNavigator from './navigation/MainNavigation';

import LoadingScreen from './containers/Loading';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
      // return <LoadingScreen />;
    }

     return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
     )
  }
}

export default registerRootComponent(App);
