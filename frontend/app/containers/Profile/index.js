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
               <View style={styles.center}>
                  <Text style={styles.name}>Jessica Hartanto Estevan</Text>

               </View>
               <Content 
                scrollEnabled={false}
               contentContainerStyle={{ 
                  flexDirection: 'row',
                  marginBottom: 0
               }}
               >
                  <View style={styles.tabRow}>
                     <Animated.Text style={styles.tabLabelNumber}>
                        1.1K
                     </Animated.Text>
                     <Animated.Text style={styles.tabLabelText}>
                        Followers
                     </Animated.Text>
                  </View>
                  <View style={styles.tabRow}>
                     <Animated.Text style={styles.tabLabelNumber}>
                        627
                     </Animated.Text>
                     <Animated.Text style={styles.tabLabelText}>
                        Posts
                     </Animated.Text>
                  </View>
               </Content>
            </Content>
            <Content  scrollEnabled={true}>
                  <Text style={styles.description}>Description</Text>
                  <Text style={styles.descriptionText}>Definition of WOING unscrambled
                  If we unscramble these letters, WOING, it and makes several words. Here is one of the definitions for a word that uses all the unscrambled letters:</Text>

                  <Text style={styles.description}>Description</Text>
                                 <Text style={styles.descriptionText}>Definition of WOING unscrambled
                  If we unscramble these letters, WOING, it and makes several words. Here is one of the definitions for a word that uses all the unscrambled letters:</Text>

                  <Text style={styles.description}>Description</Text>
                                 <Text style={styles.descriptionText}>Definition of WOING unscrambled
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
                     // containerStyle = {styles.tagSelectorContainer}
                     selectedTagStyle = {styles.tagSelected}
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



const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 15,
       backgroundColor: '#fff',
   },
   name: {
      fontSize: 24,
      marginTop: 20
   },
   description: {
      fontSize: 18,
      marginTop: 20,
      marginLeft: 20
   },
   descriptionText: {
      fontSize: 16,
      marginTop: 10,
      marginLeft: 40
   },
   tabRow: {
      width: '50%',
      alignItems: 'center', 
      marginTop: 10, 
    },
    tabLabelNumber: {
      color: 'black',
      fontSize: 22,
      textAlign: 'center',
      // marginBottom: 5,
    },
    tabLabelText: {
      color: 'black',
      fontSize: 14,
      textAlign: 'left',
      // marginBottom: 5,
    },
    center:{
      alignItems: 'center',
    }
});
export default ProfileScreen;

