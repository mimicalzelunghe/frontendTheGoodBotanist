import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Chart from '../Components/Chart';
import Navbar from '../Components/Navbar';

function PlotsScoringScreen(props){
  
  function onPressLeftIcon(){console.log("onPressLeftIcon");}

    return(
      <View style={styles.container}>
        
        <View style={{width: "100%"}}>
        <Navbar 
        iconNameLeft="plus" 
        iconNameRight="square-edit-outline" 
        iconColorLeft="#1D6880" 
        iconColorRight="#1D6880" 
        navigationText=' ' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        // onPressRightIcon={onPressRightIcon}
        />
        </View>
       


        
      <Text style={{fontSize: 35,
      lineHeight: 40,
      color: "#2A2C2B",
      marginHorizontal: 16,
      textAlign: 'center',
      marginTop: 16,
      }}>
        Le potager</Text>

      
      
      <View style={{
        
        flexDirection: "column",
        alignItems: "center",
        padding: 8,
        borderWidth: 2,
       borderColor: "#1D6880",
       margin: 24,
       borderRadius: 8
      }}>
      <Text style={{
        fontSize: 16,
        lineHeight: 22,
        color: "#1D6880",
      }}>
      BIO-SCORE</Text>
      <Text style={{
         fontSize: 35,
         lineHeight: 40,
         color: "#1D6880",
      }}>
      67</Text>
      </View>
      
      <Chart style={{width: 100}}/>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        alignItems: "center"
        
    }
})

export default PlotsScoringScreen