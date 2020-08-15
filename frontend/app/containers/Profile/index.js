import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, Animated, Segment, ScrollView, Linking, Alert} from 'react-native'

import { Icon, Container, Header, Content, Left, Right , Button} from 'native-base';

import avatar from '../../../assets/avatar.png'
import ProfileHeader from '../../components/ProfileHeader'

import globalstyles from '../../globalstyle';
import Bundle from '../../components/Bundle';
import TagSelector from 'react-native-tag-selector';
import LoadingScreen from '../Loading';

import * as SecureStore from 'expo-secure-store';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
// name, phone number(login), business number(contact), image_url, description, instagram username, followers, city_id, created_at, updated_at
import CardWrapper from '../../components/CardWrapper';
class ProfileScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
        selectedTags: [],
        initialProfile: [],
        isLoading: true,
      };
    }

    tags = [
        {
            id: 'automotive',
            name: 'Automotive'
        },
        {
            id: 'beauty',
            name: 'Beauty'
        },
        {
            id: 'tech',
            name: 'Tech'
        },
        {
            id: 'culinary',
            name: 'Culinary'
        },
        {
            id: 'fashion',
            name: 'Fashion'
        },
        {
            id: 'travel',
            name: 'Travel'
        },
        {
            id: 'diet',
            name: 'Diet'
        },
        {
            id: 'fitness',
            name: 'Fitness'
        },
        {
            id: 'financial',
            name: 'Financial'
        }
    ]

    componentDidMount= async()=>{
      const token = await SecureStore.getItemAsync('userToken');

      console.log("asdfasdfasdfasdfasdfasdfasd", token);
      return await fetch('http://165.227.25.15/api/user/get_profile/', {
          method: 'GET',
          headers: {
            //   Authorization    : `Woing eyJhbGciOiJIUzI1NiJ9.YWRtaW5Ad29pbmcuaWQ.I0WazumU80kRfk0Dh38eYALCB5YFKxYZuEPEaraM-VM`,
              Authorization    : `Woing ` + token,

          }})
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson.result);
          console.log("responseJson",responseJson);
          if (responseJson.message){
             console.log("no profile");
             if(responseJson.message=="Invalid token! Make sure to include Woing <Token>!"){
             this.setState({initialProfile: 'none'});
             return
             }else {         
               this.setState({initialProfile: 'Message'});
               return
             }
          }
          this.setState({initialProfile: responseJson.result});
      })
      .catch((error) => {
          console.error(error);
      })
      .finally(() => {

        this.setState({ isLoading: false });
      });
    }


    createTwoButtonAlert() {
        Alert.alert(
            "Sign Out",
            "Are you sure?",
            [
              
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => this.props.navigation.popToTop() }
            ],
            { cancelable: false }
        );
    }

   render() {
        const { navigation } = this.props;
      //   console.log("stateprof", this.state)
      // if (this.state.initialProfile){
        const {businessNumber, city, description, followers, gender, imageURL, instaUsername, name, priceRange, phoneNumber, tags} = this.state.initialProfile;
      // }
        console.log("tags", this.state.initialProfile)
      //   console.log("this tags", this.tags)

     if (this.state.isLoading || this.state.initialProfile == undefined || this.state.initialProfile =='Message') {
      return <LoadingScreen />;
    }
    if (this.state.initialProfile == 'none') {
      return(
      <Container>
         <ProfileHeader navigation={this.props.navigation} screenTitle="Profile"/>  
         <View style={[globalstyles.center]}>
            <Text style={globalstyles.description}>You have no profile, create one</Text>

            <Button full onPress={() => navigation.navigate('CreateProfile')}><Text style={globalstyles.fullButtonPrimary}>Create Profile</Text></Button>
         </View>
      </Container>);
    }
      return (
         <Container>
            <ProfileHeader navigation={this.props.navigation} screenTitle="Profile"/>        
            <ScrollView>
            <Content style={{
            borderBottomWidth:2, 
            marginTop: 10, 
            borderColor: '#c0c0c0'}}>
               <View style={_shadowStyle}>
                  <Image
                     style={imageStyle}
                     source={avatar}
                  />
               </View>
               <View style={[globalstyles.center]}>
                  <Content contentContainerStyle={[globalstyles.row, globalstyles.marginBottomSm]}>
                     <MaterialCommunityIcons name={gender == 'MALE'? 'gender-male':'gender-female'} size={26} color={gender == 'MALE'? '#0a11dd':'#ff1694'} />
                     <Text style={globalstyles.name}>{name}</Text>
                  </Content>
               </View>
               <Content 
               contentContainerStyle={{ 
                  flexDirection: 'row',
                  marginBottom: 0
               }}
               >
                  <View style={globalstyles.tabRowLoc}>
                     <Content 
                     contentContainerStyle={{ 
                        flexDirection: 'row',
                     }}
                     >
                     <Entypo name="location-pin" size={16} color="#808080" />
                     
                     <Animated.Text style={globalstyles.tabLabelText}>
                        {city}
                     </Animated.Text>
                     </Content>
                  </View>
                  <View style={globalstyles.tabRow} onPress={() => this.props.navigation.navigate('Setting')}>
                     {/* <Button on>

                     </Button> */}
                     <Content 
                     contentContainerStyle={{ 
                        flexDirection: 'row',
                     }}
                     
                     >
                        {/* <View onPress={() => this.props.navigation.navigate('Setting')}> */}
                           <Entypo name="instagram" size={16} color="#808080" onPress={() => Linking.openURL('https://instagram.com/gabrielashirley')} />
                           
                           <Animated.Text onPress={() => Linking.openURL('https://instagram.com/gabrielashirley')} style={[globalstyles.tabLabelText, globalstyles.marginLeftSm]}>
                              {instaUsername}
                           </Animated.Text>
                        {/* </View> */}
                     </Content>
                  </View>
               </Content>
               <Content 
                  contentContainerStyle={[globalstyles.row, globalstyles.marginBottomSm]}
                  >
                  <View style={globalstyles.tabRow}>
                     <Animated.Text style={globalstyles.tabLabelNumber}>
                        {followers}
                     </Animated.Text>
                     <Animated.Text style={globalstyles.tabLabelText}>
                        Followers
                     </Animated.Text>
                  </View>
                  <View style={globalstyles.tabRow}>
                     <Animated.Text style={globalstyles.tabLabelNumber}>
                        {phoneNumber}
                     </Animated.Text>
                     <Animated.Text style={globalstyles.tabLabelText}>
                        phone
                     </Animated.Text>
                  </View>
               </Content>
            </Content>
            <Content  scrollEnabled={true}>
                <Text style={globalstyles.description}>Price Range</Text>
                <Text style={globalstyles.descriptionText}>{priceRange}</Text>
               

                <Text style={globalstyles.description}>Tags</Text>

                  <Text style={globalstyles.descriptionText}>
                     {/* Selected: {this.state.selectedTags.map(tag => `${tag} `)} */}
                  </Text>
                  {tags &&
                  <TagSelector
                     tags={tags}
                     onChange={(selected) => this.setState({ selectedTags: selected })} />
                  }
               <CardWrapper title="Bundles" titleColor='#dfdfdf' backgroundColor='#f4f3f3'>
                  <Bundle
                     name="Deluxe"
                     description={"7 stories + 1 post + 1 review"}
                     price={"1 jt"}
                     />
                  <Bundle
                     name="Premium"
                     description={"4 insta stories + 1 post"}
                     price={"400 rb"}
                     />
                  <Bundle
                     name="Basic"
                     description={"1 Story"}
                     price={"100 rb"}
                     />
               </CardWrapper>
                <Button full onPress={() => this.createTwoButtonAlert()}><Text style={globalstyles.fullButtonPrimary}>Sign Out</Text></Button>

            </Content>
        
            </ScrollView>
         </Container>
                  
      )
   }
}

const imageStyle = {
   marginTop: 20,
   width: 150,
   height: 150,
   borderRadius: 100,
   // borderWidth: 1
};

const _shadowStyle = {
   ...Platform.select({
   ios: {
       shadowColor: "rgba(0,0,0,0.5)",
       shadowOffset: {
       width: 1.5,
       height: 1.5
       },
       shadowRadius: 20,
       shadowOpacity: 1,
       alignItems: 'center',
   },
   android: {
       elevation: 2,
       alignItems: 'center',
   }
   })
};


export default ProfileScreen;

