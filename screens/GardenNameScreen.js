import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function GardenNameScreen(props){

    return(
        <View
        style={{
          flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#C42BEC"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Your first secret garden is here</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default GardenNameScreen