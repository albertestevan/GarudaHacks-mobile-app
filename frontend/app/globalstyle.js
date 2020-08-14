import{
    StyleSheet
  } from 'react-native';
  
export default globalstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    white: {
      color: '#FFFFFF',
    },
    black: {
      color: '#000000',
    },
    red: {
      color: '#F44336',
    },
    orange:{
      color : '#FF9800',
    },
    name: {
      fontSize: 24,
      marginTop: 20
   },
   description: {
      fontSize: 18,
      marginTop: 20,
      marginLeft: 20
   },
   descriptionText: {
      fontSize: 16,
      marginTop: 10,
      marginLeft: 40
   },
   tabRow: {
      width: '50%',
      alignItems: 'center', 
      marginTop: 10, 
    },
    tabLabelNumber: {
      color: 'black',
      fontSize: 22,
      textAlign: 'center',
      // marginBottom: 5,
    },
    tabLabelText: {
      color: 'black',
      fontSize: 14,
      textAlign: 'left',
      // marginBottom: 5,
    },
    center:{
      alignItems: 'center',
    }
  });