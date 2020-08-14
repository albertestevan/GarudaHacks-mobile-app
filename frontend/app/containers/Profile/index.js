import React, {Component} from 'react'
import { StyleSheet, TouchableOpacity, View, Text , FlatList} from 'react-native'

import { Icon, Container, Header, Content, Left, Right, Segment, Button } from 'native-base';

import ProfileHeader from '../../components/ProfileHeader';

import globalstyles from '../../globalstyle';


class  ProfileScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
        activePage:1
      };
    }

    selectComponent = (activePage) => () => this.setState({activePage})

    renderComponent = () => {
        if(this.state.activePage === 1)
          return <Component1/> //... Your Component 1 to display
        else 
          return <Component2/> //... Your Component 2 to display
      }
      
   render() {
    const {navigation} = this.props;
      return (
         <Container>
             <ProfileHeader navigation={navigation} screenTitle="Profile"/>
        
            <Content contentContainerStyle={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center'
            }}>

            <Text>ProfileScreen</Text>
            <Text>{this.state.activePage}</Text>
            <Segment>
                    <Button active={this.state.activePage === 1}
                        onPress={this.selectComponent(1)}><Text style={this.state.activePage === 1 ? globalstyles.white : globalstyles.black}>Seeking Endorsement</Text></Button>
                    <Button  active={this.state.activePage === 2}
                        onPress= {this.selectComponent(2)}><Text style={this.state.activePage === 2 ? globalstyles.white : globalstyles.black}>Endorser</Text></Button>
            </Segment>

            </Content>
         </Container>
                  
      )
   }
}
export default ProfileScreen;