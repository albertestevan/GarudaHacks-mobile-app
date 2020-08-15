import React , { Component, useState } from 'react';
import Expo from 'expo';
import { View , StyleSheet} from 'react-native';
import { Container, Item, Header, Body, Content, Title, Button, Text, Picker, Icon } from 'native-base';

import LoadingScreen from '../../containers/Loading';

import DropDownPicker from 'react-native-dropdown-picker';

import RNPickerSelect from 'react-native-picker-select';

import TagSelector from 'react-native-tag-selector';

import { Input } from 'react-native-elements';

import globalstyles from '../../globalstyle';

import * as SecureStore from 'expo-secure-store';


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

export default class EditProfileForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      cities: [],
      prices: [],
      followers: [],
      genders: [],
      tags: [],
    };
  }

  

async componentDidMount() {
    const token = await SecureStore.getItemAsync('userToken');

    fetch('http://165.227.25.15/api/cities/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ cities: json.result });
      })
      .catch((error) => console.error(error))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
    fetch('http://165.227.25.15/api/followers/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ followersList: json.result });
      })
      .catch((error) => console.error(error))

      fetch('http://165.227.25.15/api/tags/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ tagsList: json.result });
      })
      .catch((error) => console.error(error))

      fetch('http://165.227.25.15/api/genders/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ gender: json.result });
      })
      .catch((error) => console.error(error))

    fetch('http://165.227.25.15/api/prices/')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ prices: json.result });
      })
      .catch((error) => console.error(error))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });

    fetch('http://165.227.25.15/api/user/get_profile/', {
        method: 'GET',
        headers: {
            'Content-Type' : `application/json`,
            'Authorization'    : `Woing ${token}`,

        }})
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.result);
            this.setState({initialProfile: responseJson.result,
                            priceRange: responseJson.result.priceRange,
                            city: responseJson.result.city,
                            followers: responseJson.result.followers,
                            gender: responseJson.result.gender,
            });
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            this.setState({ isLoading: false });
          });
  }

  async onSubmit(profile) {
    
    this.setState({ isLoading: true });

    const token = await SecureStore.getItemAsync('userToken')

    await fetch('http://165.227.25.15/api/user/update_profile/', {
            method: 'POST',
            headers: {
                'Content-Type' : `application/json`,
                'Authorization'    : `Woing ${token}`,

            },
            body: JSON.stringify({
              name: profile.name,
              imageURL: profile.imageURL,
              instaUsername: profile.instaUsername,
              phoneNumber: profile.phoneNumber,
              businessNumber: profile.businessNumber,
              description: profile.description,
              tags: profile.tags,
              city: profile.city,
              priceRange: profile.priceRange,
              followers: profile.followers,
              gender: profile.gender
            })
          })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.message);
            this.setState({ isLoading: false });

            this.props.navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            this.setState({ isLoading: false });
        });
  }

  render(){
     const { handleSubmit, reset} = this.props;

     if (this.state.isLoading) {
      return <LoadingScreen />;
    }
    return (
      <Container>
       
        <Content padder>

        <Input
          label="Name"
          // style={styles}
          // onChangeText={value => this.setState({ name: value })}
          defaultValue={this.state.initialProfile.name} 
          onChangeText={value => this.setState({ name: value })}

          />
        
        <Input
          label="imageURL"
          // style={styles}
          defaultValue={this.state.initialProfile.imageURL} 
          onChangeText={value => this.setState({ imageURL: value })}
          />
        
        <Input
          label="Instagram Username"
          // style={styles}
          defaultValue={this.state.initialProfile.instaUsername} 
          onChangeText={value => this.setState({ instaUsername: value })}
          />
        
        <Input
          label="Phone Number"
          // style={styles}
          defaultValue={this.state.initialProfile.phoneNumber} 
          onChangeText={value => this.setState({ phoneNumber: value })}
          />
        
        <Input
          label="Business Phone Number"
          // style={styles}
          defaultValue={this.state.initialProfile.businessNumber} 
          onChangeText={value => this.setState({ businessNumber: value })}
          />

        <Input
          label="Description"
          // style={styles}
          defaultValue={this.state.initialProfile.description} 
          onChangeText={value => this.setState({ description: value })}
          />
        
        <Text style={globalstyles.description}>Tags</Text>

                  <Text style={globalstyles.descriptionText}>
                     {/* Selected: {this.state.selectedTags.map(tag => `${tag} `)} */}
                  </Text>
                  <TagSelector
                     // maxHeight={70}
                     // containerStyle = {globalstyles.tagSelectorContainer}
                     tags={this.state.tagsList}
                     onChange={(selected) => this.setState({ tags: selected })} />


        <Text></Text>
        <Text style={globalstyles.description}>City</Text>
        <Text></Text>
      
        <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.city}
              onValueChange={(value) =>  this.setState({ city: value })}
            >
                {this.state.cities.map((city) => (
              <Picker.Item label={city.label} value={city.value}/>
                ))}
            </Picker>

        <Text></Text>
        <Text style={globalstyles.description}>Price Range</Text>
        <Text></Text>
        {/* <RNPickerSelect
            value={initialValues.priceRange}
            onValueChange={(value) => this.setState({ priceRange: value})}
            items={this.state.prices}
        /> */}

        <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.priceRange}
              onValueChange={(value) =>  this.setState({ priceRange: value })}
            >
                {this.state.prices.map((price) => (
              <Picker.Item label={price.label} value={price.value}/>
                ))}
            </Picker>

        <Text></Text>
        <Text style={globalstyles.description}>Followers</Text>
        <Text></Text>
        
        <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.followers}
              onValueChange={(value) =>  this.setState({ followers: value })}
            >
              {this.state.followersList.map((follower) => (
              <Picker.Item label={follower.label} value={follower.value}/>
                ))}
            </Picker>

        <Text></Text>
        <Text style={globalstyles.description}>Gender</Text>
        <Text></Text>
        
        {/* <RNPickerSelect
            value={initialValues.gender}
            onValueChange={(value) => this.setState({ gender: value })}
            items={this.state.genders}
        /> */}
        <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.gender}
              onValueChange={(value) => this.setState({ gender: value })}
            >
              {this.state.genders.map((gender) => (
              <Picker.Item label={gender.label} value={gender.value}/>
                ))}
            </Picker>
    

            <Text></Text>
          <Button block primary onPress= {() => this.onSubmit({
            name: this.state.name,
            imageURL: this.state.imageURL,
            instaUsername: this.state.instaUsername,
            phoneNumber: this.state.phoneNumber,
            businessNumber: this.state.businessNumber,
            description: this.state.description,
            // tags: this.state.tags,
            tags: this.state.tags,
            city: this.state.city,
            priceRange: this.state.priceRange,
            followers: this.state.followers,
            gender: this.state.gender
          })} 
          disabled={ !this.state.name ||  !this.state.imageURL || !this.state.instaUsername || !this.state.phoneNumber ||
            !this.state.businessNumber || !this.state.description || !this.state.tags || !this.state.city || !this.state.priceRange || !this.state.followers || !this.state.gender
          }
          >
            <Text>Submit</Text>
          </Button>
          <Text></Text>
          
        </Content>
      </Container>
    )
  }
}