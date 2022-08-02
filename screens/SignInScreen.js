import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function SignInScreen(props){

    const [isUnknownUser, setIsUnknownUser] = useState(true)
    const [hasNoGarden, setHasNoGarden] = useState(false)

    // if the user is unknown or if she has no garden yet (first garden), 
    // then show climateScreen else show HomeScreen
    // isUnknownUser value depends on the login process result
    var screenToDisplay;
    if(isUnknownUser){
      screenToDisplay = <Button title="Go page to SignUp screen" onPress={() => props.navigation.navigate('SignUp')} />

    }else if(hasNoGarden){// else, go to HomeScreen and show the gardens
      screenToDisplay = <Button title="Go page to Welcome screen" onPress={() => props.navigation.navigate('Welcome')} />

    }else{// else, display the garden of this well known user
      screenToDisplay = <Button title="Go page to HomeScreen" onPress={() => props.navigation.navigate('Home')} />

    }
    

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
        {screenToDisplay}
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