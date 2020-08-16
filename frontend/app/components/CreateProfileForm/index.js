import React , { Component, useState } from 'react';
import Expo from 'expo';
import { View , Picker, StyleSheet, Image, Alert} from 'react-native';
import { Container, Item, Header, Body, Content, Title, Button, Text } from 'native-base';

import LoadingScreen from '../../containers/Loading';

import DropDownPicker from 'react-native-dropdown-picker';

import RNPickerSelect from 'react-native-picker-select';

import TagSelector from 'react-native-tag-selector';

import { Input } from 'react-native-elements';

import globalstyles from '../../globalstyle';

import * as SecureStore from 'expo-secure-store';
import Media from '../../components/Media';


import avatar from "../../../assets/avatar.png";
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

export default class CreateProfileForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      cities: [],
      prices: [],
      followers: [],
      genders: [],
      tags: [],
      image: null
    };
  }

  ImageHandler = async()=>{
    if (!this.state.image) return ""
    const form = new FormData();
    form.append("file", {uri: this.state.image, name: 'profileImage.jpg', type: 'image/jpeg'})

    const response = await fetch('http://165.227.25.15/api/file/', {
    method: 'POST',
    body: form
    }).catch(function(error) {
       console.log('There has been a problem with your fetch operation: ');
       // ADD THIS THROW error
       // throw error;
    });
    const resData = await response.json();
    console.log(resData);
    if (resData.error) {
          let message = resData.error;
          console.log(resData.error);
          // throw new Error(message);
          Alert.alert(message);
          return null;
    }else{
       console.log("success resp", resData);
    }
    return 'http://165.227.25.15'+resData.file;
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
        this.setState({ genders: json.result });
      })
      .catch((error) => console.error(error))

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

  async onSubmit(profile) {
    console.log("onsubmit");
    console.log(profile.name);
    const imageUrl = await this.ImageHandler();
    console.log(imageUrl);

    console.log(profile.instaUsername);

    console.log(profile.phoneNumber);

    console.log(profile.businessNumber);

    console.log(profile.description);

    console.log(profile.tags);

    console.log(profile.gender);

    this.setState({ isLoading: true });

    const token = await SecureStore.getItemAsync('userToken')

    const body = JSON.stringify({
      name: profile.name,
      imageURL: imageUrl,
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

    console.log("body", body)
    await fetch('http://165.227.25.15/api/user/verify_user/', {
            method: 'POST',
            headers: {
                'Content-Type' : `application/json`,
                'Authorization'    : `Woing ${token}`,
            },
            body: body
          })
        .then((response) => response.json())
        .then(async(responseJson) => {
            console.log(responseJson);
            action = {
              token : token,
              isVerified: true
            }
            this.setState({ isLoading: false });
        const token = await SecureStore.setItemAsync('userInfo', JSON.stringify({isVerified: true, token: token}))
        })
        .catch((error) => {
            console.error(error);
            // this.props.navigation.navigate('me')
            this.setState({ isLoading: false });
            throw new Alert(error.message);
        });
  }

  imageCallback=(image)=> {
    this.setState({image: image});
  }

  render(){

     const { handleSubmit, reset } = this.props;

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
          onChangeText={value => this.setState({ name: value })}

          />
        
        {/* <Input
          label="imageURL"
          // style={styles}
          onChangeText={value => this.setState({ imageURL: value })}
          /> */}
        <View style={{alignItems:'center'}}>
          {<Image source={this.state.image ? { uri: this.state.image } : avatar} style={{ width: 200, height: 200 }} />}
        </View>
        <Media description="camera roll" setImage={this.imageCallback}/>
        
        <Input
          label="Instagram Username"
          // style={styles}
          onChangeText={value => this.setState({ instaUsername: value })}
          />
        
        <Input
          label="Phone Number"
          // style={styles}
          onChangeText={value => this.setState({ phoneNumber: value })}
          />
        
        <Input
          label="Business Phone Number"
          // style={styles}
          onChangeText={value => this.setState({ businessNumber: value })}
          />

        <Input
          label="Description"
          // style={styles}
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
      
        <RNPickerSelect
            onValueChange={(value) => this.setState({ city: value})}
            items={this.state.cities}
        />

        <Text></Text>
        <Text style={globalstyles.description}>Price Range</Text>
        <Text></Text>
        <RNPickerSelect
            onValueChange={(value) => this.setState({ priceRange: value})}
            items={this.state.prices}
        />

        <Text></Text>
        <Text style={globalstyles.description}>Followers</Text>
        <Text></Text>
        
        <RNPickerSelect
            onValueChange={(value) => this.setState({ followers: value })}
            items={this.state.followersList}
        />

        <Text></Text>
        <Text style={globalstyles.description}>Gender</Text>
        <Text></Text>
        
        <RNPickerSelect
            onValueChange={(value) => this.setState({ gender: value })}
            items={this.state.genders}
        />
    

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
            // gender: this.state.gender
            gender: this.state.gender

          })} 
          // disabled={ !this.state.name ||  !this.state.imageURL || !this.state.instaUsername || !this.state.phoneNumber ||
          //   !this.state.businessNumber || !this.state.description || !this.state.tags || !this.state.city || !this.state.priceRange || !this.state.followers
          // }
          >
            <Text>Submit</Text>
          </Button>
          <Text></Text>
          
        </Content>
      </Container>
    )
  }
}