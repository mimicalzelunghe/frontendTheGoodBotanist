import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonic from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

function SnapScreen(props) {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);
  const [visible, setVisible] = useState(false);

  var camera = useRef(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  var cameraDisplay;
  if (hasPermission && isFocused) {
    cameraDisplay = <Camera style={{ flex: 1 }}
      type={type}
      flashMode={flash}
      ref={ref => (camera = ref)}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{

            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <IconIonic
            name="camera-reverse"
            size={20}
            color="#ffffff"
          /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{

            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={() => {
            setFlash(
              flash === Camera.Constants.FlashMode.torch
                ? Camera.Constants.FlashMode.off
                : Camera.Constants.FlashMode.torch
            );
          }}>
          <IconFontAwesome
            name="flash"
            size={20}
            color="#ffffff"
          /><Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flash </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  } else {
    cameraDisplay = <View style={{ flex: 1 }}></View>
  }

  return (
    <View style={{ flex: 1 }}>
      <Overlay isVisible={visible} width="auto" height="auto">
        <Text>Loading</Text>
      </Overlay>

      {cameraDisplay}

      <ButtonPrimaryExp
        onPress={async () => {
          setVisible(true);
          if (camera) {
            let photo = await camera.takePictureAsync(
                { quality: 0.7,
                base64: true,
                exif: true });

            var data = new FormData();
            data.append('avatar', {
              uri: photo.uri,
              type: 'image/jpeg',
              name: 'avatar.jpg',
            });

            console.log("mimic2: before fetch")

            var rawResponse = await fetch(backendIpAddress+'/plants/uploadPicture', {
              method: 'POST',
              body: data
            });
            var response = await rawResponse.json();
            console.log("mimic1: response", response)
          
            props.onSnap(response.url, response.detectedFaces[0].age, response.detectedFaces[0].gender );
            setVisible(false);
          }
        }}
        icon={
          <IconFontAwesome
            name="save"
            size={20}
            color="#ffffff"
          />
        }
        title="Snap"
        buttonStyle={{ backgroundColor: "#009788" }}
        type="solid"
      />


    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onSnap: function (url, age, gender) {
      console.log("Mimic18: url, age, gender : ", url, age, gender)
      dispatch({ type: 'addPicture', url, age, gender })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SnapScreen);
