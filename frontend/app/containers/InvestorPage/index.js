import React, {Component} from 'react'
import { TouchableOpacity, View, Text , Button, FlatList} from 'react-native'

import { Icon, Container, Header, Content, Left, Right } from 'native-base';

import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';




class  InvestorPageScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
        minimumValue: '',
      };
    }

   componentDidMount() {
      fetch('https://delicate-king-df67.liku.workers.dev/')
      .then((response) => response.json())
      .then((json) => {
         this.setState({ minimumValue: json });
         console.log(json);
       })
      // .then((json) => {
      //    return json.value;
      // })
      .catch((error) => {
         console.error(error);
      });
   }

   render() {

      return (
         <Container>
            <HeaderHamburgerMenu navigation={this.props.navigation} screenTitle="Kolaborator"/>        

            <Content contentContainerStyle={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center'
            }}>

            <Text>InvestorPageScreen</Text>
            <Text>{"sample value form Cloudflare KV:" + this.state.minimumValue}</Text>
            {/* <FlatList */}

            </Content>
         </Container>
                  
      )
   }
}
export default InvestorPageScreen