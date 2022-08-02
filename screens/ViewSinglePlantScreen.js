import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function ViewSinglePlantScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#862BEC"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Single plant screen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default ViewSinglePlantScreen