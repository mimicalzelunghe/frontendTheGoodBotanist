import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


function HomeScreen(props){

    return(
        <View
        style={{
          flex:1,
          flexDirection: "col",
          height: 100,
          padding: 20,
          textAlign: "center",
          backgroundColor: "yellow"
          
        }}
      >
        <Text style={{fontFamily:"Cochin"}}>HomeScreen</Text>
        <Button title="Go page to plot dimension screen" onPress={() => props.navigation.navigate('PlotDimension')} />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 20
    }
})

export default HomeScreen