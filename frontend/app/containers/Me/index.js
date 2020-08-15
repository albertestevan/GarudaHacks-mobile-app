import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import { Icon, Container, Header, Content, Left, Button} from 'native-base'
import globalstyle from '../../globalstyle'


const MeScreen = ({ navigation }) => {
  
   return (
      <Container>

         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}
         padder>

         <Button full onPress={() => navigation.navigate('SignUp')}><Text style={globalstyle.fullButtonPrimary}>Sign Up</Text></Button>

         </Content>
      </Container>
   )
}
export default MeScreen