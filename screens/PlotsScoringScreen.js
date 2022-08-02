import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function PlotsScoringScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#EC2B6F"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Plot scoring screen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default PlotsScoringScreen