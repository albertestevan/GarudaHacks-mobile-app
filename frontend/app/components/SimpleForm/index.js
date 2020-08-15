import React , { Component } from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';

import LoadingScreen from '../../containers/Loading';

import DropDownPicker from 'react-native-dropdown-picker';

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



class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false,
      isLoading: true,
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
                <Input {...input}/>
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
      </View>
    );
  };



  renderDropdownPicker({ input, label, type, meta: { touched, error, warning } }){

    return( 
    <View>
        <Text>{label}</Text>
        <Text></Text>
        <DropDownPicker
            items={[
                {label: 'Ambon', value: 'ambon'},
                {label: 'Balikpapan', value: 'balikpapan'},
            ]}
            // defaultValue={this.state.country}
            containerStyle={{height: 45}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({
                city: item.value
            })}
        />
      </View>
    );
};




  
  async componentWillMount() {
   
  this.renderInput({ input, label, type, meta: { touched, error, warning } });
}

async componentDidMount() {
    fetch('http://165.227.25.15/api/cities/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ cities: json.result });
      })
      .catch((error) => console.error(error))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
    fetch('http://165.227.25.15/api/prices/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ prices: json.result });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });

      });
  }

  render(){
     const { handleSubmit, reset } = this.props;

    

     if (this.state.isLoading) {
      return <LoadingScreen />;
    }
    return (
      <Container>
       
        <Content padder>
          <Field 
            label="Full Name" 
            name="name" 
            component={this.renderInput} 
        />
        <Field 
            label="Image URL" 
            name="imageURL" 
            component={this.renderInput} 
        />
        <Field 
            label="Instagram Username" 
            name="instaUsername" 
            component={this.renderInput} 
        />
        <Field 
            label="Phone Number" 
            name="phoneNumber" 
            component={this.renderInput} 
        />
        <Field 
            label="Business Phone Number" 
            name="bussinessNumber" 
            component={this.renderInput} 
        />
        <Field 
            label="Description" 
            name="description" 
            component={this.renderInput} 
        />
        <Field 
            label="Tags" 
            name="tags" 
            component={this.renderInput} 
        />
        <Field 
            label="City" 
            name="city" 
            component={this.renderDropdownPicker} 
        />

        {/* <DropDownPicker
            // items={[
            //     {label: 'Ambon', value: 'ambon'},
            //     {label: 'Balikpapan', value: 'balikpapan'},
            // ]}
            items={this.state.citiesDropdown}
            // defaultValue={this.state.country}
            containerStyle={{height: 45}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({
                country: item.value
            })}
        /> */}


            <Text></Text>
          <Button block primary onPress= {reset}>
            <Text>Submit</Text>
          </Button>
          <Text></Text>
          <Button block light onPress= {reset}>
            <Text>Reset</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
export default reduxForm({
  form: 'test',
  validate
})(SimpleForm)