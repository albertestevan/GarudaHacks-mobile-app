import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native'

import { Icon, Container, Header, Content, Left, Spinner} from 'native-base'

const LoadingScreen = () => {
  
   return (
      <Container>
         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
         }}
         scrollEnabled={false}
         >

         <Spinner color='blue' />

         </Content>
      </Container>
   )
}
export default LoadingScreen