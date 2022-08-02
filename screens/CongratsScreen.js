import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function CongratsScreen(props){

    return(
        <View
        style={{
          flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#048C29"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>Congratulation!! You're taking part to a great purpose</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default CongratsScreen