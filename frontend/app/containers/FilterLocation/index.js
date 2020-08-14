import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native'

import { Icon, Container, Header, Content, Left} from 'native-base'


const FilterLocationScreen = ({ navigation }) => {
  
   return (
      <Container>

         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
         }}>

         <Text>FilterLocationScreen</Text>

         </Content>
      </Container>
   )
}
export default FilterLocationScreen