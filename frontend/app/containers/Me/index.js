import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

import { Icon, Container, Header, Content, Left, Button} from 'native-base'
import globalstyle from '../../globalstyle'

import { useSelector } from 'react-redux';

import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';

const MeScreen = (props) => {
   const {navigation} = props;

   const dispatch = useDispatch();

   const state = useSelector(state => state);
   console.log("me state",state)
   return (
      <Container>


         {state && state.auth.token ? 
         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
            }}
            padder>
               <Text>You are logged in</Text>
               <Text></Text>
               <Button full onPress={() => navigation.navigate('CreateProfile')}><Text style={globalstyle.fullButtonPrimary}>Create Profile</Text></Button>
               <Text></Text>
               <Button full onPress={() => navigation.navigate('Profile')}><Text style={globalstyle.fullButtonPrimary}>Profile</Text></Button>
               <Text></Text>
               <Button full onPress={() => dispatch(authActions.signOut())}><Text style={globalstyle.fullButtonPrimary}>signout</Text></Button>
         </Content>
         :
            <Content contentContainerStyle={{
               flex: 1,
               alignItems: 'center',
               justifyContent: 'center'
               }}
               padder>
               <Button full onPress={() => navigation.navigate('Login')}><Text style={globalstyle.fullButtonPrimary}>Log In</Text></Button>
               <Text></Text>
               <Button full onPress={() => navigation.navigate('SignUp')}><Text style={globalstyle.fullButtonPrimary}>Sign Up</Text></Button>

               {/* <Text></Text>
               <Button full onPress={() => navigation.navigate('CreateProfile')}><Text style={globalstyle.fullButtonPrimary}>Create Profile</Text></Button>
               <Text></Text>
               <Button full onPress={() => navigation.navigate('Profile')}><Text style={globalstyle.fullButtonPrimary}>Profile</Text></Button> */}
            </Content>
         }
               {/* <View>
                  <Text>You are logged in</Text>
                  <Button title="signout" onPress={() => dispatch(authActions.signOut())}/>
               </View>
               :<View>
               <Text>Please Log In</Text>
                  <Button title="Login" onPress={() => navigation.navigate('Login')}/>
                  <Button title="Register" onPress={() => navigation.navigate('SignUp')}/>
               </View> */}
      </Container>
   )
}
export default MeScreen