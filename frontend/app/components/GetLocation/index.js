import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Button } from 'react-native';
// import { Constants, Location, Permissions } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


class GetLocation extends Component {
    state = {
        location: null,
        errorMessage: null
    };

    // findCurrentLocation = () => {
    //     navigator.geolocation.getCurrentPosition(
    //         position => {
    //             const latitude = JSON.stringify(position.coords.latitude);
    //             const longitude = JSON.stringify(position.coords.longitude);

    //             this.setState({
    //                 latitude,
    //                 longitude
    //             });
    //         },
    //         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //     );
    // };

    findCurrentLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({
                errorMessage: 'No Permission to Access Location'
            })
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    componentDidMount() {
        this.findCurrentLocationAsync();
    }

    render() {
        //only for testing
        let text = '';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        }
        else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        return(
            <View>
                {/* <Button title="Get Location" onPress={this.findCurrentLocationAsync}/> */}
                {/* <Text>{this.state.latitude ? `Latitude: ${this.state.latitude}` : ""}</Text>
                <Text>{this.state.longitude ? `Longitude: ${this.state.longitude}` : ""}</Text> */}
                <Text>{text !== '' ? `Location: \n${text}` : ''}</Text>
            </View>
        );
    }
}

export default GetLocation;