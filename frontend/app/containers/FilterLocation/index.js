import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native';

import { Icon, Container, Header, Content, Left, Right, List, ListItem} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';



class FilterLocationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    

    render() {

        const { navigation } = this.props;
        const menuList = 
        [
            //Haven't called api for city list
            "Ambon",
            "Balikpapan",
            "Banda Aceh",
            "Bandung",
            "Banjar",
            "Banjarbaru",
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

export default FilterLocationScreen;

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