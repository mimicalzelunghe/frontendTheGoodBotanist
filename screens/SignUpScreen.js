import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function SignUpScreen(props){

    return(
        <View
        style={{
        flex:1,
          flexDirection: "row",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "violet"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>SignUp</Text>
        <Button title="Go page to welcome screen" onPress={() => props.navigation.navigate('Welcome')} />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default SignUpScreen