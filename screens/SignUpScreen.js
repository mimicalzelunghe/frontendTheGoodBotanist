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

function SignUpScreen(props){

    const [isUnknownUser, setIsUnknownUser] = useState(true)
    const [hasNoGarden, setHasNoGarden] = useState(false)

    var handleValidation = ()=>{
      // TODO: call to the backend - route signup

      //if user is well known, display a message saying to it's already known

      // propagate user info

      // TODO: redirect to the welcome page
      props.navigation.navigate("Welcome")

    }
    
    var onPressLeftIcon = () => {
      props.navigation.navigate('SignIn')
    }



    return(
      <View style={styles.container}>
        <View style={styles.navbartop}>
          <Navbar 
          iconNameLeft="arrow-left" 
          iconNameRight="close" 
          iconColorLeft="#1D6880" 
          iconColorRight="#FFFFFF" 
          navigationText=' ' 
          redirectionIconeLeft="../screens/HomeScreen.js" 
          onPressLeftIcon={onPressLeftIcon} 
          />
          </View>
          <SafeAreaView style={styles.safe}>
          <Text style={styles.titleXL}>Créer votre compte :</Text>
          <View style={styles.inputLayoutContainer}>
            <Input placeholder='Email' affichage="flex"/>
            <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' />
            <Input placeholder='Mot de passe' affichage="flex"/>
            <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères'/>
          </View> 
        </SafeAreaView>

        <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='Créer son compte' 
        // iconName="check" 
        // iconColor="white"
        text='Submit'
        onPress={handleValidation}
        />
        </View>

      </View>
    );
  }
  
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

  export default SignUpScreen











/*
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
*/
