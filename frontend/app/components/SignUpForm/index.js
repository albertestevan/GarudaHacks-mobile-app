import React , { Component } from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';

import LoadingScreen from '../../containers/Loading';

import Icon from 'react-native-vector-icons/Feather';

const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
  return error;
};



class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false,
      isLoading: false,
      cities: [],
      prices: [],
      citiesDropdown: [],
      city: '',

    };
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
    <View>
        <Text>{label}</Text>
            <Item error= {hasError}>
                <Input {...input} secureTextEntry={type === 'password' ? true : false}/>
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
      </View>
    );
  };
  
  async componentWillMount() {
   
  this.renderInput({ input, label, type, meta: { touched, error, warning } });
}

async componentDidMount() {
    
  }

  render(){
     const { handleSubmit, reset, navigation } = this.props;

     if (this.state.isLoading) {
      return <LoadingScreen />;
    }
    return (
      <Container>
       
        <Content padder>
          <Field 
            label="Email" 
            name="email" 
            component={this.renderInput} 
        />
        <Field 
            label="Password" 
            name="password" 
            type="password"
            component={this.renderInput} 
        />
        <Field 
            label="Confirm Password" 
            name="confirmPassword" 
            type="password"
            component={this.renderInput} 
        />

            <Text></Text>
          <Button block primary onPress= {reset}>
            <Text>Sign Up</Text>
          </Button>
          <Text></Text>
          <Button block transparent light onPress={() => navigation.navigate('Login')}>
            <Text>Have an account?</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
export default reduxForm({
  form: 'signUp',
  validate
})(SignUpForm)