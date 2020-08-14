import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base'


const SettingScreen = ({ navigation }) => {
  
   return (
      <Container>

         <Content contentContainerStyle={{
         }}>
            <List listItemPadding={40}>
                <ListItem onPress={() => {navigation.navigate('EditProfile')}} selected>
                    <Left>
                        <Text>Edit Profile</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            

                <ListItem onPress={() => {navigation.navigate('EditProfile')}} selected>
                    <Left>
                        <Text>Edit Profile</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>

         </Content>
      </Container>
   )
}
export default SettingScreen;