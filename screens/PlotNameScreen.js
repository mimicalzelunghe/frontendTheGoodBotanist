import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, Button } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';

import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';

function PlotNameScreen(props){

    const [isUnknownUser, setIsUnknownUser] = useState(true)
    const [hasNoGarden, setHasNoGarden] = useState(false)

    function onPressLeftIcon(){console.log("onPressLeftIcon");}
  function onPressRightIcon(){console.log("onPressRightIcon");}

  function handleValidation(){
    props.navigation.navigate("SelectsPlant")
    }




    return(
      <View style={styles.container}>
        <View style={styles.navbartop}>
        <Navbar iconNameLeft="keyboard-backspace" 
        iconNameRight="close" 
        iconColorLeft="#1D6880" 
        iconColorRight="#1D6880" 
        navigationText='' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        onPressRightIcon={onPressRightIcon}/>
          </View>
          <SafeAreaView style={styles.safe}>
          <Text style={styles.titleXL}>Comment voulez-vous appeller votre parcelle ?</Text>
          <View style={styles.inputLayoutContainer}>
            <Input placeholder='Nom de votre parcelle' affichage="flex"/>
            <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' />
          </View> 
        </SafeAreaView>

        <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='Découvrir les plantes' 
        // iconName="check" 
        // iconColor="white"
        text='Submit'
        onPress={handleValidation}
        />
        </View>

      </View>
    );
  }
  export default PlotNameScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    safe: {
        marginTop: 24,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },

      inputLayoutContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      Illustration : {
        marginVertical: 32,
        height: 200,
        width: 200,
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
        marginTop: 8,},
    buttonBlock : {
        flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 16,
    },
    navbartop: {
      marginTop : 8,
    },
  
  })

  
