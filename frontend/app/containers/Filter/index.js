import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base'


const FilterScreen = ({ navigation }) => {
  
   return (
      <Container>

         <Content contentContainerStyle={{
         }}>
            <List listItemPadding={40}>
                <ListItem onPress={() => {navigation.navigate('FilterLocation')}} selected>
                    <Left>
                        <Text>Location</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            

                <ListItem onPress={() => {navigation.navigate('FilterPriceRange')}} selected>
                    <Left>
                        <Text>Price Range</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>

                <ListItem onPress={() => {navigation.navigate('FilterTags')}} selected>
                    <Left>
                        <Text>Tags</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>

         </Content>
      </Container>
   )
}
export default FilterScreen;