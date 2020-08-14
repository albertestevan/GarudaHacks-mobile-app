import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native';

import { Icon, Container, Header, Content, Left} from 'native-base';

import TagSelector from 'react-native-tag-selector';


class FilterTagsScreen extends Component {

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