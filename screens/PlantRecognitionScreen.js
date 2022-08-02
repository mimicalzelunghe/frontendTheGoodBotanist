import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function PlantRecognitionScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#2B93EC"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Recognize your plant here. It's magic</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default PlantRecognitionScreen