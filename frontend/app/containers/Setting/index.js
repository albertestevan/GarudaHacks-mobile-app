import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import { Icon, Container, Content, Left, Right, Button, List, ListItem} from 'native-base'

import globalstyles from '../../globalstyle';


const SettingScreen = ({ navigation }) => {
  
   return (
      <Container>

         <Content contentContainerStyle={{
         }}>
            <List listItemPadding={40}>
                <ListItem onPress={() => {navigation.navigate('EditProfile')}} selected>
                    <Left>
                        <Content contentContainerStyle={{
                            padding: 10,
                            flexDirection: 'row',
                            }}>
                            
                            <Text style={globalstyles.menuText}>Edit Profile</Text>
                        </Content>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            

                <ListItem onPress={() => {navigation.navigate('ManagePlans')}} selected>
                    <Left>
                        <Content contentContainerStyle={{
                            padding: 10,
                            flexDirection: 'row',
                            }}>
                            
                            <Text style={globalstyles.menuText}>Manage Plans</Text>
                        </Content>
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