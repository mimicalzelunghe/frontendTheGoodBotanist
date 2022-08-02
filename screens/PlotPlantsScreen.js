import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function PlotPlantsScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#EC2B93"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Here are your plants in your plot</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default PlotPlantsScreen