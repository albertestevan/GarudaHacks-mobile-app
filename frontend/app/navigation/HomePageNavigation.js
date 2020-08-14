import React, {Component} from 'react';

import HomeScreen from '../containers/home/index';
import InvestorPageScreen from '../containers/InvestorPage/index';
import AngelsPageScreen from '../containers/AngelsPage/index';
import FundraiserPageScreen from '../containers/FundraiserPage/index';
import CampaignPageScreen from '../containers/CampaignPage/index';

import { TouchableOpacity, View, Text, StyleSheet, AsyncStorage} from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from "@react-navigation/drawer";

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base';


const Drawer = createDrawerNavigator();

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
      menu_list: '',
    };
  }

  componentDidMount = async () => {

      // await fetch('https://hamburger-menu.liku.workers.dev/')
      // .then((response) => response.json())
      // .then((json) => {
      //   AsyncStorage.setItem('HamburgerMenu', json.menu_list);
      //   this.setState({ menu_list: json.menu_list });
      //   //  console.log(json);
      //   //  console.log(this.state.menu_list);
      // })
      // .catch((error) => {
      //   console.error(error);

      //   const menuListStorage = AsyncStorage.getItem('HamburgerMenu');
      //   this.setState({ menu_list: menuListStorage });
      // });

      try {
        let response = await fetch(
          'https://hamburger-menu.liku.workers.dev/'
        );
        let json = await response.json();
        let menuListStorage = await JSON.stringify(json.menu_list);

        await AsyncStorage.setItem('HamburgerMenu', menuListStorage);
        this.setState({ menu_list: json.menu_list });

      } catch (error) {

        const menuListStorage = await AsyncStorage.getItem('HamburgerMenu');
        const menuListData = await JSON.parse(menuListStorage);
        this.setState({ menu_list: menuListData });

        console.error(error);
      }

 };


  render() {
    // this.state = { menu_list };
    return (
          <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} menuList={this.state.menu_list}/>}>
             <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="InvestorPage" component={InvestorPageScreen} options={{title: 'Kolaborator'}}/>
              <Drawer.Screen name="AngelsPage" component={AngelsPageScreen} options={{title: 'Angels'}}/>
              <Drawer.Screen name="FundraiserPage" component={FundraiserPageScreen} options={{title: 'Pemilik Proyek'}}/>
              <Drawer.Screen name="CampaignPage" component={CampaignPageScreen} options={{title: 'Proyek'}}/>
          </Drawer.Navigator>
    );
  }
}

export default HomePageNavigator