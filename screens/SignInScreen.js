import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, Button, TextInput } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';

import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';

import {connect} from 'react-redux';

import backendIpAdress from '../parameters/param.js'

function SignInScreen(props){
    
    const [token, setToken] = useState('')
    const [isUnknownUser, setIsUnknownUser] = useState(true)
    const [hasNoGarden, setHasNoGarden] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    // if the user is unknown or if she has no garden yet (first garden), 
    // then show climateScreen else show HomeScreen
    // isUnknownUser value depends on the login process result
    var screenToDisplay;
    
    var handleSubmitConnectionRequest = async ()=>{

      var knownUser = false
      var hasGarden = false

      // upload user
      const userData = await fetch(backendIpAdress+'/users/signIn', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `emailFromFront=${email}&passwordFromFront=${password}`
      })

      //retranscription de la réponse pour qu'on puisse la lire
      const userBody = await userData.json()

      if(userBody.result == true){
        console.log("Mimic7:  SignInScreen - result body est true:", userBody)
        knownUser = true
        setToken(userBody.token)
        props.receivedToken(userBody.token)

        if(userBody.userGardens.length != 0){
          hasGarden = true
          console.log("Mimic8:  SignInScreen - hasGarden is true:", hasGarden)
        }
        
      }  else {
        knownUser = false
        setEmailError(userBody.error)
        setPasswordError(userBody.errorr)
      }
  
  
      // call to backend: is the user known?
      // if known user and if she has a garden the display the home
      if(!knownUser){
        props.navigation.navigate("SignUp")
      }else if(!hasGarden){// else, go to HomeScreen and show the gardens
        props.navigation.navigate("Welcome")
      }else{// else, display the garden of this well known user
        props.navigation.navigate("Home")
      }

    }

    var handleSubmitSignUpRequest = ()=>{
      console.log("Mimic")
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
        <Input placeholder='Email' affichage="flex" onChangeText={(value)=> {setEmail(value)}} value={email} keyboardType="email"/>
        <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' />
        <Input placeholder='Mot de passe' affichage="flex" onChangeText={(value)=> setPassword(value)} value={password}/>
        <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails={passwordError}/>
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
    // update the variable token into the Redux store
    function mapDispatchToProps(dispatch) {
      return {
        receivedToken: function(receivedToken) { 
          console.log("Mimic6: SignInScreen - into mapDispatchToProps - token is :", receivedToken)
            dispatch( {type: 'token', token: receivedToken}) 
            
        }
      }
     }
     
    export default connect(
      null, 
      mapDispatchToProps
    )(SignInScreen);
  
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
  
  })

