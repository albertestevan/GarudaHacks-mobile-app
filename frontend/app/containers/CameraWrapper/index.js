import React, {useState} from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Button, Image} from 'react-native'

import { Icon, Container, Header, Content, Left, Spinner} from 'native-base'
import Media from '../../components/Media'
function CameraWrapper(){
  const [image, setImage] = useState(null);
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
         </Content>
      </Container>
   )
}
export default CameraWrapper