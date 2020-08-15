import React , { Component } from 'react';
import allReducers from '../../reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { Field, reduxForm } from 'redux-form';
import CreateProfileForm from '../../components/CreateProfileForm/index.js';
const store = createStore(allReducers);
 export default class CreateProfileScreen extends Component{
  render(){
    return(
      <Provider store= {store}>
        <CreateProfileForm navigation={this.props.navigation}/>
      </Provider>
    )
  }
}