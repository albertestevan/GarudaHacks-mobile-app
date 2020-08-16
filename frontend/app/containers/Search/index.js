import React, {Component} from 'react'
import { Dimensions, StyleSheet, ScrollView, Text, Modal, View, TouchableHighlight} from 'react-native'
import { Icon, Container, Header, Content, Left, Right, Item, Input, Button} from 'native-base';
import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';

// import { Card } from "@paraboly/react-native-card";
import Card from '../../components/Card';

const { width } = Dimensions.get("window");


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterScreen from '../Filter';


class  SearchScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchBarInput: "",
         // showModal:false
      };
    }

   componentDidMount() {
      
   }

   searchSubmit() {
      console.log("search submitted");
   }

   render() {
      const { navigation } = this.props;
      console.log("filter state", this.state);
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
                    {/* <Button transparent onPress={() => this.setState({showModal:true})}> */}
                        <MaterialCommunityIcons name="filter-variant" size={30}/>
                    </Button>
                </Header>
                {/* <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.showModal}
                  onRequestClose={() => {
                  Alert.alert("Modal has been closed.");}}
                >
               <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                     <Text style={styles.modalText}>Hello World!</Text>
                     <FilterScreen props={this.props}/>
                     <TouchableHighlight
                     style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                     onPress={() => {
                        this.setState({showModal:false});
                     }}
                     >
                     <Text style={styles.textStyle}>Hide Modal</Text>
                     </TouchableHighlight>
                  </View>
               </View>
                </Modal> */}
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
                     imageURL={'http://165.227.25.15/media/profileImage_1LbNjZ0.jpg'}
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
   },
      centeredView: {
        flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
         height: 1000,
        marginTop: 22
      },
      modalView: {
         height: 600,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
      //   alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
    
 });