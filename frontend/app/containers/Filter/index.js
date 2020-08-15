import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base'


class FilterScreen extends Component {
  
render() {
    const { navigation } = this.props;
   return (
      <Container>

         <Content contentContainerStyle={{
         }}>
            <List listItemPadding={40}>
                <ListItem onPress={() => navigation.navigate('FilterLocation')} selected>
                    <Left>
                    <Content contentContainerStyle={{
                          padding: 10,
                          flexDirection: 'row',
                        }}>
                        
                        <Text style={styles.menuText}>Location</Text>
                    </Content>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
            

                <ListItem onPress={() => {navigation.navigate('FilterPriceRange')}} selected>
                <Left>
                    <Content contentContainerStyle={{
                          padding: 10,
                          flexDirection: 'row',
                        }}>
                        
                        <Text style={styles.menuText}>Price Range</Text>
                    </Content>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>

                <ListItem onPress={() => {navigation.navigate('FilterTags')}} selected>
                <Left>
                    <Content contentContainerStyle={{
                          padding: 10,
                          flexDirection: 'row',
                        }}>
                        
                        <Text style={styles.menuText}>Tags</Text>
                    </Content>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
            </List>

         </Content>
      </Container>
   )
    };   
}
export default FilterScreen;

const styles = StyleSheet.create({
    menuText:{
        fontWeight: 'bold',
    }
});