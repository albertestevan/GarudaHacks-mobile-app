import React, {Component} from 'react'
import { TouchableOpacity, View, Text , Button, FlatList} from 'react-native'

import { Icon, Container, Header, Content, Left, Right } from 'native-base';

import ProfileHeader from '../../components/ProfileHeader';


class  ProfileScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
    }

   componentDidMount() {
      
   }

   render() {

      return (
         <Container>
             <ProfileHeader screenTitle="Profile"/>
            <Content contentContainerStyle={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center'
            }}>

            <Text>ProfileScreen</Text>

            </Content>
         </Container>
                  
      )
   }
}
export default ProfileScreen