import React, {Component} from 'react'
import { Dimensions, StyleSheet, ScrollView, Text} from 'react-native'
import { Icon, Container, Header, Content, Left, Right, Item, Input, Button} from 'native-base';
import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';

// import { Card } from "@paraboly/react-native-card";
import Card from '../../components/Card'

const { width } = Dimensions.get("window");


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
      const { navigation } = this.props;
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

                    <Button transparent onPress={() => navigation.navigate('Filter')}>
                        <MaterialCommunityIcons name="filter-variant" size={30}/>
                    </Button>
                </Header>
            <ScrollView>
            <Text>{this.state.searchBarInput}</Text>
               <Content 
               contentContainerStyle={{   
                  flex: 1,
                  backgroundColor: '#fff',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingTop: 10
               }}
               >
                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />


                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />
                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />
                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />
                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />
                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />
                  <Card
                     width={width}
                     name={"woing"}
                     location={"jakataks"}
                     price={"10000"}
                     // style={styles.card}
                     />

               </Content>
            </ScrollView>
         </Container>
                  
      )
   }
}
export default SearchScreen;

const styles = StyleSheet.create({
   card: {
     width:  width * 0.45,
     height: width * 0.45,
     marginLeft: width * 0.025,
     margin: width * 0.025
   },
   gradient: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   authContainer: {
     width: '80%',
     maxWidth: 400,
     maxHeight: 400,
     padding: 20
   },
   buttonContainer: {
     marginTop: 10
   }
 });