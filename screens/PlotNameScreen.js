import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function PlotNameScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#ECB12B"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Sign In</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default PlotNameScreen