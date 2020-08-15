import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native';

import { Icon, Container, Header, Content, Left, Right, List, ListItem} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

import LoadingScreen from '../Loading';

class FilterLocationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
      }

      componentDidMount() {
        fetch('http://165.227.25.15/api/cities/')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json.result });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
    

    render() {

        const { navigation } = this.props;
        const { data, isLoading } = this.state;
        // const menuList = 
        // [
        //     //Haven't called api for city list
        //     "Ambon",
        //     "Balikpapan",
        //     "Banda Aceh",
        //     "Bandung",
        //     "Banjar",
        //     "Banjarbaru",
        // ]
        if (isLoading) {
            return(<LoadingScreen/>)
        }

        return (
            <Container>

                <Content contentContainerStyle={{
                    
                }}>
            
            <List>
                {data.map(city => (
                <ListItem onPress={() => this.setState({ [city]: !this.state[city]})} selected>
                  <Left>
                    <Content contentContainerStyle={{
                          padding: 10,
                          flexDirection: 'row',
                        }}>
                        {this.state[city] ? (
                        <Ionicons name="md-checkmark" size={20} style={styles.pickedText}/>
                        ) : null}

                        {this.state[city] ? (
                        <Text style={styles.pickedText}>{city}</Text>
                        ) : <Text style={styles.regularText}>{city}</Text>}
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