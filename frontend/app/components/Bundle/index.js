import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ImageBackground, Image, Platform} from "react-native";
import Ripple from "react-native-material-ripple";
import avatar from "../../../assets/avatar.png";
import { Content } from "native-base";

// import { Constants } from 'expo';

const Bundle = props => {
    const {
        style,
        onPress,
        borderRadius,
        image,
        name,
        description,
        location,
        price,
    } = props;

    // const cardWidth = width * 0.45;
    // const cardMargin = width * 0.025;

    const baseStyle = {
        width: '100%',
        height: 200,
        borderRadius: 15
    };
  
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 15,
            backgroundColor: '#f7f2e7',
            width: '100%',
            // margin: 10
            // height: 100
        },
        img: baseStyle,
        imgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'absolute',
        ...baseStyle,
        },
        imgOver: {
            flex: 1,
            justifyContent: 'flex-end',
            margin: '100%',
            marginLeft: 5,
            position: 'absolute',
            backgroundColor: 'transparent',
            ...baseStyle,
        },
        text:{
            // fontFamily: 'Helvetica',
            marginLeft: 10,
            fontSize:  16
        },
        name:{
            // fontFamily: 'Helvetica',
            marginLeft: 10,
            fontSize:  20
        }
    });

    const _shadowStyle = {
        ...Platform.select({
        ios: {
            margin: 10,
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: {
            width: 1.5,
            height: 1.5
            },
            shadowRadius: 6,
            shadowOpacity: 1,
        },
        android: {
            elevation: 2
        }
        })
    };

  return (
    <View style={[_shadowStyle]}>
            <View style={styles.container}>
                <View
                  style={[{backgroundColor: '#e3dfc8', borderTopLeftRadius: 15, borderTopRightRadius:15, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, height: 30}]}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                        <Text style={styles.text}>{description}</Text>
                        <Text style={styles.text}>Rp {price}</Text>
            </View>
    </View>
  );
};

export default Bundle;