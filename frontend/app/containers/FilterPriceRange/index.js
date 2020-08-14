import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native';

import { Icon, Container, Header, Content, Left, Right, List, ListItem} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';



class FilterPriceRangeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    

    render() {
        const menuList = 
        [
            //Haven't called api for city list
            "30.000 - 99.000",
            "100.000 - 299.000",
            "300.000 - 599.000",
            "600.000 - 1.000.000",
        ]
        return (
            <Container>

                <Content contentContainerStyle={{
                    
                }}>
            
            <List>
                {menuList.map(menu => (
                <ListItem onPress={() => this.setState({ [menu]: !this.state[menu]})} selected>
                  <Left>
                    <Content contentContainerStyle={{
                          padding: 10,
                          flexDirection: 'row',
                        }}>
                        {this.state[menu] ? (
                        <Ionicons name="md-checkmark" size={20} style={styles.pickedText}/>
                        ) : null}

                        {this.state[menu] ? (
                        <Text style={styles.pickedText}>{menu}</Text>
                        ) : <Text style={styles.regularText}>{menu}</Text>}
                    </Content>
                  </Left>
                  <Right>
                  </Right>
              </ListItem>))}
              </List>

                </Content>
            </Container>
        )
    };
}

export default FilterPriceRangeScreen;

const styles = StyleSheet.create({
    pickedText:{
        color: '#32CD32',
        fontWeight: 'bold',
        paddingRight: 20
    },
    regularText:{
        fontWeight: 'bold',
    }
});