import React , { Component } from 'react';
import allReducers from '../../reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
      <Provider store= {store}>
        <LoginForm navigation={this.props.navigation}/>
      </Provider>
    )
  }
}