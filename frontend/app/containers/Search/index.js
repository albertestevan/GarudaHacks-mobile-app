import React, {Component} from 'react'
import { TouchableOpacity, View, Text ,  FlatList} from 'react-native'

import { Icon, Container, Header, Content, Left, Right, Item, Input, Button} from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class  SearchScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {

      };
    }

   componentDidMount() {
      
   }

   searchSubmit() {
      console.log("search submitted");
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
                           value={this.state.searchBarInput}
                           onChangeText={val => this.setState({ searchBarInput: val })}
                           onSubmitEditing={this.searchSubmit}
                        />
                    </Item>

                    <Button transparent>
                        <MaterialCommunityIcons name="filter-variant" size={30}/>
                    </Button>
                </Header>

            <Content contentContainerStyle={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center'
            }}>

            <Text>SearchScreen</Text>
         <Text>{this.state.searchBarInput}</Text>


            </Content>
         </Container>
                  
      )
   }
}
export default SearchScreen