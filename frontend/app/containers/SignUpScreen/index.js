import React , { Component } from 'react';
import allReducers from '../../reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SignUpForm from '../../components/SignUpForm';
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
      <Provider store= {store}>
        <SignUpForm navigation={this.props.navigation}/>
      </Provider>
    )
  }
}