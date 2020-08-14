import React, {Component} from 'react'
import { StyleSheet, TouchableOpacity, View, Text , FlatList} from 'react-native'

import { Icon, Container, Header, Content, Left, Right, Segment, Button } from 'native-base';

import ProfileHeader from '../../components/ProfileHeader';

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
    const {navigation} = this.props;
      return (
         <Container>
             <ProfileHeader navigation={navigation} screenTitle="Profile"/>
        
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
         </Container>
                  
      )
   }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    // tagSelectorContainer: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // }
    // tagSelected: {
    //   color : "blue"
    // }

  });