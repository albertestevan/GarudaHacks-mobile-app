import React, {Component} from 'react'
import { TouchableOpacity, View, Text ,  FlatList} from 'react-native'

import { Icon, Container, Header, Content, Left, Right, Item, Input, Button} from 'native-base';


class  SearchScreen extends Component {
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
            <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                           placeholder="Search"
                           returnKeyType="search"
                           value={this.state.term}
                           onChangeText={val => this.setState({ term: val })}
                        />
                    </Item>

                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

            <Content contentContainerStyle={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center'
            }}>

            <Text>SearchScreen</Text>
         <Text>{this.state.term}</Text>


            </Content>
         </Container>
                  
      )
   }
}
export default SearchScreen