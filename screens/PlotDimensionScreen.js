import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function PlotDimensionScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#A7EC2B"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>The dimension of your plot</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default PlotDimensionScreen