import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, Animated, Segment, Button} from 'react-native'

import { Icon, Container, Header, Content, Left, Right } from 'native-base';

import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';
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


    selectComponent = (activePage) => () => this.setState({activePage})

    renderComponent = () => {
        if(this.state.activePage === 1)
          return <Component1/> //... Your Component 1 to display
        else 
          return <Component2/> //... Your Component 2 to display
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

            <Content  scrollEnabled={false} style={{
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
                scrollEnabled={false}
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
                  <Text style={globalstyles.description}>Description</Text>
                  <Text style={globalstyles.descriptionText}>Definition of WOING unscrambled
                  If we unscramble these letters, WOING, it and makes several words. Here is one of the definitions for a word that uses all the unscrambled letters:</Text>

                  <Text style={globalstyles.description}>Description</Text>
                                 <Text style={globalstyles.descriptionText}>Definition of WOING unscrambled
                  If we unscramble these letters, WOING, it and makes several words. Here is one of the definitions for a word that uses all the unscrambled letters:</Text>

                  <Text style={globalstyles.description}>Description</Text>
                                 <Text style={globalstyles.descriptionText}>Definition of WOING unscrambled
                  If we unscramble these letters, WOING, it and makes several words. Here is one of the definitions for a word that uses all the unscrambled letters:</Text>
               {/* </ScrollView> */}
               <Content contentContainerStyle={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
               padder>

               <Text>ProfileScreen</Text>
               <Text>Tags</Text>

                  <Text>
                     Selected: {this.state.selectedTags.map(tag => `${tag} `)}
                  </Text>
                  <TagSelector
                     // maxHeight={70}
                     // containerStyle = {globalstyles.tagSelectorContainer}
                     selectedTagStyle = {globalstyles.tagSelected}
                     tags={this.tags}
                     onChange={(selected) => this.setState({ selectedTags: selected })} />
         
               </Content>
            </Content>
        

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

