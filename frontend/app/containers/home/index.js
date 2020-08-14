import React from 'react';

import { useSelector } from 'react-redux';

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, View, Text, StyleSheet, Button, BackHandler} from "react-native";
import { Icon, Container, Content, Left } from 'native-base';

import GetLocation from '../../components/GetLocation';
import HeaderHamburgerMenu from '../../components/HeaderHamburgerMenu';


export default function HomeScreen(props) {
   const {navigation} = props;

   const dispatch = useDispatch();

   const state = useSelector(state => state);
   return (
      <Container>
         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
         }}>
            {state && state.auth.token ?
               <View>
                  <Text>You are logged in</Text>
                  <Button title="signout" onPress={() => dispatch(authActions.signOut())}/>
               </View>
               :<View>
               <Text>Please Log In</Text>
                  <Button title="Login" onPress={() => navigation.navigate('Login')}/>
                  <Button title="Register" onPress={() => navigation.navigate('SignUp')}/>
               </View>
            }
            <GetLocation />
            <Button title="Media" onPress={() => navigation.navigate('CameraWrapper')} />
         </Content>
      </Container>
   );
};
