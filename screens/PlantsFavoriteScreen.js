import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function PlantsFavoriteScreen(props){

  

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#2BEC93"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Tell me, which are your favorite plants? </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default PlantsFavoriteScreen