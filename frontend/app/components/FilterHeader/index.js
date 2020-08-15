import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import { Icon, Container, Header, Content, Left, Right, Title, Body } from 'native-base';

import Feather from 'react-native-vector-icons/Feather';

class FilterHeader extends Component {
   render() {
       const { navigation } = this.props;
       return(
           <View>
               <Header style={styles.headerBackground}>
                  <Left style={{flex:1}}>
                      <Feather name="x" size={25} onPress={() => navigation.navigate('Search')}/>
                  </Left>
                  <Body style={{flex: 3, flexDirection:'row', justifyContent:'center'}}>
                     <Title style={{textAlign:'left'}}>Filter</Title>
                  </Body>
                  <Right style={{flex:1}}>
                  </Right> 
               </Header>
           </View>
       );
   }
}

export default FilterHeader;

const styles = StyleSheet.create({
   headerBackground: {
    color: '#FFFFFF',
  },
  });
  
