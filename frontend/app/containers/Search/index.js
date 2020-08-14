import React, {Component} from 'react'
import { Dimensions, StyleSheet, ScrollView} from 'react-native'

import { Icon, Container, Header, Content, Left, Right } from 'native-base';

import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';

// import { Card } from "@paraboly/react-native-card";
import Card from '../../components/Card'

const { width } = Dimensions.get("window");
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
            <HeaderHamburgerMenu navigation={this.props.navigation} screenTitle="search"/>        

            <ScrollView>
               <Content 
               contentContainerStyle={{   
                  flex: 1,
                  backgroundColor: '#fff',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingTop: 40
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