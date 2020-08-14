import React from 'react'
import { TouchableOpacity, View, Text , Button} from 'react-native'

import { Icon, Container, Header, Content, Left } from 'native-base';

import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';



const CampaignPageScreen = ({ navigation }) => {
  
   return (
      <Container>
         <HeaderHamburgerMenu navigation={navigation} screenTitle="Proyek"/>

         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}>

         <Text>CampaignPageScreen</Text>

         </Content>
      </Container>
               
   )
}
export default CampaignPageScreen