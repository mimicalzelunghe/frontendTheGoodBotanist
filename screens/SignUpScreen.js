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

import {connect} from 'react-redux';

import backendIpAdress from '../parameters/param.js'

function SignUpScreen(props){

    
    const [email, setEmail] = useState(true)
    const [password, setPassword] = useState(true)
    const [token, setToken] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    var handleValidation = async ()=>{
      // TODO: call to the backend - route signup
          // create the garden
  
      const userData = await fetch(backendIpAdress+'/users/signUp', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `emailFromFront=${email}&passwordFromFront=${password}`
      })
      
      //retranscription de la réponse pour qu'on puisse la lire
      //body contains the following parameters
      // 1-result: true if user is created, false if not
      // 2-token: the user's token
      // 3-error
      const userBody = await userData.json()

      //if user is well known, display a message saying that she is already known
      if(userBody.error.lenght>0){
        console.log("Mimic1: SignUpScreen - dans le handleValidation, user déjà connu. userBody :", userBody)
        //TODO: renvoyer message à l'écran Utilisateur connu
        setPasswordError("Utilisateur déjà connu")

      }else{
        //save the token into the redux store
        console.log("Mimic2: SignUpScreen - dans le handleValidation, user créé. token :", userBody.token)
        setToken(userBody.token)
        
        //save the token into the store
        props.receivedToken(userBody.token)

        // Redirect to the welcome page
        props.navigation.navigate("Welcome")

      }

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
              <Input placeholder='Email' affichage="flex" onChangeText={(value)=> {setEmail(value)}} value={email}/>
              <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' />
              <Input placeholder='Mot de passe' affichage="flex" onChangeText={(value)=> {setPassword(value)}} value={password}/>
              <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails={passwordError}/>
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


  // update the variable token into the Redux store
  function mapDispatchToProps(dispatch) {
    return {
      receivedToken: function(receivedToken) { 
        console.log("Mimic3: SignUpScreen - into mapDispatchToProps - token is :", receivedToken)
          dispatch( {type: 'token', token: receivedToken}) 
          
      }
    }
   }
   
  export default connect(
    null, 
    mapDispatchToProps
  )(SignUpScreen);

  
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


