import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, Text, Modal } from 'react-native';
import {
  Icon,
  Container,
  Header,
  Content,
  Left,
  Right,
  Item,
  Input,
  Button,
} from 'native-base';
import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';

// import { Card } from "@paraboly/react-native-card";
import Card from '../../components/Card';

const { width } = Dimensions.get('window');

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarInput: '',
      showModal: false,
      userArray: [],
    };
  }

  componentDidMount = async () => {
    //  return await fetch(`http://165.227.25.15/api/search/search/`, {
    //    method: 'POST',
    //    body: JSON.stringify({
    //      limit: '14',
    //      tags: ['AUTOMOTIVE', 'BEAUTY', 'EDUCATION'],
    //    }),
    //    headers: {
    //      'Content-Type': 'application/json',
    //    },
    //  })
    //    .catch(function (error) {
    //      console.log('There has been a problem with your fetch operation: ');
    //      throw error;
    //    })
    //    .then(response => response.json())
    //    .then(responseJson => {
    //      console.log('Search');
    //      console.log(responseJson.result);
    //      this.setState({ users: responseJson });
    //    });
  };

  searchSubmit = () => {
    return fetch(`http://165.227.25.15/api/search/search/`, {
      method: 'POST',
      body: JSON.stringify({
        limit: '14',
        search: this.state.searchBarInput,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ');
        throw error;
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) this.setState({ userArray: responseJson.result });
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              returnKeyType="search"
              value={this.state.searchBarInput}
              onChangeText={val => this.setState({ searchBarInput: val })}
              onSubmitEditing={this.searchSubmit}
            />
          </Item>

          <Button transparent onPress={() => navigation.navigate('Filter')}>
            <MaterialCommunityIcons name="filter-variant" size={30} />
          </Button>
        </Header>
        <ScrollView>
          <Content
            contentContainerStyle={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingTop: 10,
            }}
          >
            {this.state.userArray.map((user, i) => {
              return (
                <Card
                  image={String(user.image_url)}
                  width={width}
                  name={user.name}
                  location={user.city}
                  price={user.price}
                />
              );
            })}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  card: {
    width: width * 0.45,
    height: width * 0.45,
    marginLeft: width * 0.025,
    margin: width * 0.025,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
