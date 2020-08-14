import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, Animated, Segment, Button, ScrollView } from 'react-native'

import { Icon, Container, Header, Content, Left, Right } from 'native-base';

import avatar from '../../../assets/avatar.png'
import ProfileHeader from '../../components/ProfileHeader'

import globalstyles from '../../globalstyle';

import TagSelector from 'react-native-tag-selector';



class  ProfileScreen extends Component {
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

   render() {

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
               <View style={globalstyles.center}>
                  <Text style={globalstyles.name}>Jessica Hartanto Estevan</Text>
               </View>
               <Content 
               contentContainerStyle={{ 
                  flexDirection: 'row',
                  marginBottom: 0
               }}
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
                     selectedTagStyle = {globalstyles.tagSelected}
                     tags={this.tags}
                     onChange={(selected) => this.setState({ selectedTags: selected })} />


                <Text style={globalstyles.description}>Bundles</Text>
                <Text style={globalstyles.descriptionText}>Sample Bundles</Text>
         
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
   borderRadius: '100%',
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

