import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, Button } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp';
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp';


import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import {connect} from 'react-redux';


function SignInScreen(props){
  console.log("props", props);

    const [isUnknownUser, setIsUnknownUser] = useState(false)
    const [hasNoGarden, setHasNoGarden] = useState(true)

    function redirection() {props.navigation.navigate('Welcome')}

    // if the user is unknown or if she has no garden yet (first garden), 
    // then show climateScreen else show HomeScreen
    // isUnknownUser value depends on the login process result
    var screenToDisplay;

    
    var handleSubmitConnectionRequest = ()=>{
      // TODO: call to backend: is the user known? route: uploadUser

      // if known user and if she has a garden the display the home
      if(isUnknownUser){
        //screenToDisplay = <Button title="Go page to SignUp screen" onPress={() => props.navigation.navigate('SignUp')} />
        props.navigation.navigate("SignUp")
      }else if(hasNoGarden){// else, go to HomeScreen and show the gardens
        //screenToDisplay = <Button title="Go page to Welcome screen" onPress={() => props.navigation.navigate('Welcome')} />
        props.navigation.navigate("Welcome")
      }else{// else, display the garden of this well known user
        //screenToDisplay = <Button title="Go page to HomeScreen" onPress={() => props.navigation.navigate('Home')} />
        props.navigation.navigate("Home")
      }

    }

    var handleSubmitSignUpRequest = ()=>{
      props.navigation.navigate("SignUp")

    }

    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/logo.png')}
        />
        <View style={styles.inputLayoutContainer}>
        <Input placeholder='Email' affichage="flex"/>
        <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' />
        <Input placeholder='Mot de passe' affichage="flex"/>
        <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères'/>
      </View> 

        </SafeAreaView>

        <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='Se connecter' 
        iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={handleSubmitConnectionRequest}
        />
        

      <ButtonSecondaryExp
        buttonLabel='Créer un compte' 
        iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={handleSubmitSignUpRequest}
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
        marginTop: 24
      ,
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
  
  })

export default SignInScreen