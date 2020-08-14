import React from 'react'
import { TouchableOpacity, View, Text , Button} from 'react-native'

import { Icon, Container, Header, Content, Left } from 'native-base';

import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';



const FundraiserPageScreen = ({ navigation }) => {
  
   return (
      <Container>
          <HeaderHamburgerMenu navigation={navigation} screenTitle="Pemilik Proyek"/>

         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}>

         <Text>FundraiserPageScreen</Text>

         </Content>
      </Container>
               
   )
}
export default FundraiserPageScreen