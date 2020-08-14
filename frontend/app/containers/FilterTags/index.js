import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native';

import { Icon, Container, Header, Content, Left} from 'native-base';

import TagSelector from 'react-native-tag-selector';


class FilterTagsScreen extends Component {

    tags = [
        {
            id: '1',
            name: 'Automotive'
        },
        {
            id: '2',
            name: 'Beauty'
        },
        {
            id: '3',
            name: 'Tech'
        },
        {
            id: '4',
            name: 'Culinary'
        },
        {
            id: '5',
            name: 'Fashion'
        },
        {
            id: '6',
            name: 'Travel'
        },
        {
            id: '7',
            name: 'Diet'
        },
        {
            id: '8',
            name: 'Fitness'
        },
        {
            id: '9',
            name: 'Financial'
        }
    ]
  
render() {
   return (
      <Container>

         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}>
         <TagSelector
                     // maxHeight={70}
                     // containerStyle = {globalstyles.tagSelectorContainer}
                     tags={this.tags}
                     onChange={(selected) => this.setState({ selectedTags: selected })} />

         </Content>
      </Container>
   )
        }
}
export default FilterTagsScreen