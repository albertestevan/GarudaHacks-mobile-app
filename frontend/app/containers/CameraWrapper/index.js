import React, {useState} from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, Alert} from 'react-native'
import { Icon, Container, Header, Content, Left, Spinner, Button} from 'native-base'
import Media from '../../components/Media'
function CameraWrapper(){
  const [image, setImage] = useState(null);

  const submitHandler= async()=>{
      console.log(image);
      const form = new FormData();
      form.append("file", {uri: image, name: 'profileImage.jpg', type: 'image/jpeg'})

      const response = await fetch('http://165.227.25.15/api/file/', {
      method: 'POST',
      body: form
      }).catch(function(error) {
         console.log('There has been a problem with your fetch operation: ');
         // ADD THIS THROW error
         // throw error;
      });
      const resData = await response.json();
      console.log(resData);
      if (resData.error) {
            let message = resData.error;
            console.log(resData.error);
            // throw new Error(message);
            Alert.alert(message);
            return
      }else{
         // console.log("success resp", resData);
      }


  }
//   console.log('imh', image)

   return (
      <Container>
         <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
         }}
         scrollEnabled={false}
         >
             <Media description="camera roll" mediaType="cameraRoll" setImage={setImage}/>
             <Media description="camera" mediaType="camera" setImage={setImage}/>
             <Media description="both" setImage={setImage}/>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <Button disabled={image ? false : true} onPress={()=> submitHandler()}><Text>Submit</Text></Button>
         </Content>
      </Container>
   )
}
export default CameraWrapper;

// const form = new FormData();

// form.append('image', {
//   uri: "file:///...",
//   type: 'image/jpg',
//   name: 'image.jpg',
// });

// fetch('https://example.com/api/upload', {
//   method: 'POST',
//   body: form
// });