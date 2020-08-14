import React, {useState} from 'react';
import { View, Text, ActivityIndicator,StyleSheet, TouchableHighlight, Button, Image, Modal} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
export default function Media(props){
    const [permission, setPermission] = useState(false);
    const [permissionCamera, setPermissionCamera] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const getPermissionAsync = async () => {
        if (!permission) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
          else if (status == 'granted') {
              setPermission(true);
          }
        }
      };

      const getPermissionCameraAsync = async () => {
        if (!permissionCamera) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          } else if (status == 'granted') {
              setPermissionCamera(true);
          }
        }
      };

    const _pickImage = async () => {
        if (!permission) {
            getPermissionAsync();
        }

        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            props.setImage(result.uri);
            setModalVisible(false);
          }
        } catch (E) {
          console.log(E);
        }
      };

    
      const _takePhoto = async () => {
        if (!permissionCamera) {
            getPermissionCameraAsync();
        }
        try {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            props.setImage(result.uri);
            setModalVisible(false);
          }
        } catch (E) {
          console.log(E);
        }
      };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {props.mediaType == "cameraRoll" ? (
            <Button title={props.description} onPress={_pickImage} />
            ) : props.mediaType == "camera" ? (
                <Button title={props.description} onPress={_takePhoto} />) 
                :
                (
                <View>
                    <Button title={props.description} onPress={()=>
                                    setModalVisible(!modalVisible)} />
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Upload image from?</Text>
                                <Button title={"Gallery"} onPress={_pickImage} />
                                <Button title={"Camera"} onPress={_takePhoto} />
                                <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
                )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
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