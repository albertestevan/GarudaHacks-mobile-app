import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, Animated, Segment, ScrollView, Linking, Alert} from 'react-native'

import { Icon, Container, Header, Content, Left, Right , Button} from 'native-base';

import avatar from '../../../assets/avatar.png'
import ProfileHeader from '../../components/ProfileHeader'

import globalstyles from '../../globalstyle';
import Bundle from '../../components/Bundle';
import TagSelector from 'react-native-tag-selector';

import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
// name, phone number(login), business number(contact), image_url, description, instagram username, followers, city_id, created_at, updated_at
import CardWrapper from '../../components/CardWrapper';
class ProfileScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
        selectedTags: [],
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

    componentDidUpdate(){

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
                     <MaterialCommunityIcons name="gender-female" size={26} color="#ff1694" />
                     <Text style={globalstyles.name}>Jessica Hartanto Estevan</Text>
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
                        Surabaya
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
                              jessicaHartanto
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
                        1.1K
                     </Animated.Text>
                     <Animated.Text style={globalstyles.tabLabelText}>
                        Followers
                     </Animated.Text>
                  </View>
                  <View style={globalstyles.tabRow}>
                     <Animated.Text style={globalstyles.tabLabelNumber}>
                        627
                     </Animated.Text>
                     <Animated.Text style={globalstyles.tabLabelText}>
                        Posts
                     </Animated.Text>
                  </View>
               </Content>
            </Content>
            <Content  scrollEnabled={true}>
                <Text style={globalstyles.description}>Price Range</Text>
                <Text style={globalstyles.descriptionText}>500.000-1.000.000</Text>
               

                <Text style={globalstyles.description}>Tags</Text>

                  <Text style={globalstyles.descriptionText}>
                     {/* Selected: {this.state.selectedTags.map(tag => `${tag} `)} */}
                  </Text>
                  <TagSelector
                     // maxHeight={70}
                     // containerStyle = {globalstyles.tagSelectorContainer}
                     tags={this.tags}
                     onChange={(selected) => this.setState({ selectedTags: selected })} />
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

