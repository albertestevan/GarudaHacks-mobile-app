import React , { Component } from 'react';
import allReducers from '../../reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { Field, reduxForm } from 'redux-form';
import EditProfileForm from '../../components/EditProfileForm/index.js';
import { isLoaded } from 'expo-font';
import LoadingScreen from '../Loading/index.js';

import * as SecureStore from 'expo-secure-store';


const store = createStore(allReducers);

class EditProfileScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            profile: [],
            initialProfile: [],
        };
      }


    componentDidMount = async () => {
    
        // fetch('http://165.227.25.15/api/prices/')
        //   .then((response) => response.json())
        //   .then((json) => {
        //     this.setState({ profile: json.result });
        //   })
        //   .catch((error) => console.error(error))
        //   .finally(() => {
        //     this.setState({ isLoading: false });
        //   });
        // console.log("asdfasdfasdfasdfasdfasdfasd");

        // // const token = await SecureStore.getItemAsync('userToken');

        // return await fetch('http://165.227.25.15/api/user/get_profile/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type' : `application/json`,
        //         'Authorization'    : `Woing eyJhbGciOiJIUzI1NiJ9.YWRtaW5Ad29pbmcuaWQ.I0WazumU80kRfk0Dh38eYALCB5YFKxYZuEPEaraM-VM`,

        //     }})
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(responseJson.result);
        //     this.setState({initialProfile: responseJson.result});
        // })
        // .catch((error) => {
        //     console.error(error);
        // });

        // try {
        //     let response = fetch('http://165.227.25.15/api/user/get_profile/', {
        //         method: 'GET',
        //         headers: {
        //             Authorization: `Woing eyJhbGciOiJIUzI1NiJ9.YWRtaW5Ad29pbmcuaWQ.I0WazumU80kRfk0Dh38eYALCB5YFKxYZuEPEaraM-VM`
        //         },
        //     })
        //     let json = await response.json();

        //     this.setState({
        //         profile: json.result,
        //         isLoading: false,
        //     })
        //     console.log("asdf");
        //     return json.result;

        // } catch (error) {
        //         console.error(error);
        // }

        // await fetch('http://165.227.25.15/api/user/get_profile/', {
        //     method: 'GET',
        //     headers: {
        //         Authorization: `Woing eyJhbGciOiJIUzI1NiJ9.YWRtaW5Ad29pbmcuaWQ.I0WazumU80kRfk0Dh38eYALCB5YFKxYZuEPEaraM-VM`
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         // if (responseJson.status == "success") {
        //         //     console.log(this.state);
        //         //     alert("your todolist is completed!!");
        //         // }
        //         this.setState({
        //                     profile: json.result,
        //                     isLoading: false,
        //         })
        //         console.log('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfres JSON');
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

    }


  render(){
    const {isLoading, initialProfile} = this.state

    if (isLoading){
        return(<LoadingScreen/>)
    }
    return(
      <Provider store= {store}>
        <EditProfileForm navigation={this.props.navigation}
        
        />
      </Provider>
    )
  }
}

export default EditProfileScreen