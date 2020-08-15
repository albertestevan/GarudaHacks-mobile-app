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

         <Button full onPress={() => navigation.navigate('Login')}><Text style={globalstyle.fullButtonPrimary}>Log In</Text></Button>
         <Text></Text>
         <Button full onPress={() => navigation.navigate('SignUp')}><Text style={globalstyle.fullButtonPrimary}>Sign Up</Text></Button>
         <Text>Profile (After Signed Up and Create Profile) vvv</Text>
         <Button full onPress={() => navigation.navigate('Profile')}><Text style={globalstyle.fullButtonPrimary}>Profile</Text></Button>

         </Content>
      </Container>
   )
}
export default MeScreen