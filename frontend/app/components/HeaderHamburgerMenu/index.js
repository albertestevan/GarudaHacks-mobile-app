import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { Icon, Container, Header, Content, Left, Right, Title, Body } from 'native-base';


class HeaderHamburgerMenu extends Component {
   render() {
       return(
           <View>
               <Header>
                  <Left style={{flex:1}}>
                     <Icon name="menu" onPress={() => this.props.navigation.toggleDrawer()} />
                  </Left>
                  <Body style={{flex: 3, flexDirection:'row', justifyContent:'center'}}>
                     <Title style={{textAlign:'left'}}>{this.props.screenTitle}</Title>
                  </Body>
                  <Right style={{flex:1}}>
                        
                  </Right> 
               </Header>
           </View>
       );
   }
}

export default HeaderHamburgerMenu;
