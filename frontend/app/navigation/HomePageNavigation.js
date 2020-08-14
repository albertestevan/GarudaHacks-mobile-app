import React, {Component} from 'react';

import HomeScreen from '../containers/home';
import SearchScreen from '../containers/Search';
import ProfileScreen from '../containers/Profile';

import { TouchableOpacity, View, Text, StyleSheet, AsyncStorage} from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base';


const Tabs = createBottomTabNavigator();

export class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <Container>
         <Content contentContainerStyle={{
            paddingTop: 20,
         }}>
           <List>

            <ListItem onPress={() => {this.props.navigation.navigate('Home')}} selected>
              <Left>
                <Text>Home</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            {console.log(this.props.menuList)}
            {this.props.menuList
              ? this.props.menuList.map(menu => (
                <ListItem onPress={() => {this.props.navigation.navigate(`${menu.name}`)}} selected>
                  <Left>
                    <Text>{`${menu.title}`}</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
              </ListItem>
              ))
            : null}
            </List>
        </Content>
      </Container>

    );
  }

}



class HomePageNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = async () => {


 };


  render() {
    // this.state = { menu_list };
    return (
      // <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} menuList={this.state.menu_list}/>}>
          <Tabs.Navigator>
             <Tabs.Screen name="Home" component={HomeScreen} />
              <Tabs.Screen name="Search" component={SearchScreen}/>
              <Tabs.Screen name="Profile" component={ProfileScreen}/>
          </Tabs.Navigator>
    );
  }
}

export default HomePageNavigator