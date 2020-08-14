import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native'

import { Icon, Container, Header, Content, Left} from 'native-base'

import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';


const AboutPageScreen = ({ navigation }) => {
  
   return (
      <Container>
         <HeaderHamburgerMenu navigation={navigation} screenTitle="About"/>

         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}>

         <Text>AboutPageScreen</Text>

         </Content>
      </Container>
   )
}
export default AboutPageScreen