import React from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';



function PlotPlantsScreen() {

    function onPressRightIcon(){console.log("onPressRightIcon");}
    function onPressLeftIcon(){props.navigation.navigate("Home")}

  return (

    <View style={styles.container}>

        <Navbar 
        iconNameLeft="keyboard-backspace" 
        iconNameRight="close" 
        iconColorLeft="#1D6880" 
        iconColorRight="#FFFFFF"  
        navigationText='Nouvelle parcelle' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        // onPressRightIcon={onPressRightIcon}
        />

      <ScrollView style={{paddingTop: 24}}>
      <Text style={styles.titleXL}>Quel est le type de sol ?</Text>



      </ScrollView>




    </View>
  );
}

export default PlotPlantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: "#FFF",
  }, imageContainer : {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'

    },

    Illustration : {
      marginVertical: 32,
      height: 300,
      width: 300,
    },
  buttonBlock: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
  }, 
  titleXL: {

      fontSize: 35,
      lineHeight: 40,
      color: "#2A2C2B",
      marginHorizontal: 16,
      textAlign: 'center'
  }, 
  titleLG: {
      fontSize: 26,
      lineHeight: 34,
      color: "#2A2C2B",
      marginHorizontal: 16,
      textAlign: 'center'
  },
  bodyMd: {
      fontSize: 16,
      lineHeight: 22,
      color: "#2A2C2B",
      marginHorizontal: 16,
      textAlign: 'center',
      marginTop: 8,
  },
  
  buttonBlock : {
      flexDirection: 'row',
      gap: 8,
      backgroundColor: '#fff',
      flexDirection: 'column',
      marginHorizontal: 16,
      marginVertical: 16,
  },
  pressable :{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
  },
  textWrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
  },
  icone: {
      height: 24,
      width: 24,
      margin: 8,
      overflow: 'visible',
      resizeMode: "cover",
  },  
  Titre: {
      display: "inline",
      fontSize: 20,
      lineHeight: 22,
      color: '#2A2C2B',
      marginBottom: 4
  },
  Description: {

      fontSize: 16,
      lineHeight: 22,
      color: '#2A2C2B',
  },

  
  flexRowInputContainer : {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: 8,
      gap: 8,
  
  }

})
