import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function SignInScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "blue"
          
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

export default SignInScreen