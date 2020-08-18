import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, ImageBackground, Image, Platform} from "react-native";
import Ripple from "react-native-material-ripple";
// import TextContainer from "./components/TextContainer";
// import IconContainer from "./components/IconContainer";
// import styles, {
//   container,
//   _shadowStyle,
//   topRightTextStyle,
//   bottomRightTextStyle
// } from "./styles/Card.style";
// import colors from "../shared/colors.style";
import avatar from "../../../assets/avatar.png";

// import { Constants } from 'expo';

const Card = props => {
    const {
        style,
        onPress,
        name,
        location,
        price,
        width,
        imageURL
    } = props;

    const cardWidth = width * 0.45;
    const cardMargin = width * 0.025;

    const baseStyle = {
        width: cardWidth,
        height: cardWidth,
        borderRadius: 15
    };
  
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: '#fff',
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
            margin: cardMargin,
            marginLeft: cardMargin,
            position: 'absolute',
            backgroundColor: 'transparent',
            
            ...baseStyle,
        },
        text:{
            fontFamily: 'Roboto',
            marginLeft: 5,
            fontSize: cardWidth *0.08,
        },
        textWrapper:{
            // marginLeft: 5,
            // fontSize: cardWidth *0.08,
            backgroundColor: '#ccc',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
        }
    });

    const _shadowStyle = {
        ...Platform.select({
        ios: {
            shadowColor: "rgba(0,0,0,0.11)",
            shadowOffset: {
            width: 1.5,
            height: 1.5
            },
            shadowRadius: 6,
            shadowOpacity: 1
        },
        android: {
            elevation: 2
        }
        })
    };

  return (
    <View style={[_shadowStyle]}>
      <Ripple
        style={style || container(cardWidth, cardMargin)}
        onPress={onPress}
        rippleContainerBorderRadius={15}
      >
            <View style={styles.container}>
                <View style={styles.imgWrapper}>
                    <Image
                        style={styles.img}
                        source={imageURL ? { uri: imageURL } : avatar}
                    />
                    <View style={styles.imgOver}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.text}>{name}</Text>
                            <Text style={styles.text}>{location}</Text>
                            <Text style={styles.text}>{price}</Text>
                        </View>
                    </View>
                </View>

            </View>
      </Ripple>
    </View>
  );
};

export default Card;

function container(cardWidth, cardMargin) {
    return {

     width:  cardWidth,
     height: cardWidth,
     marginLeft: cardMargin,
     margin: cardMargin
    };
}
