import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, Button, TextInput } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';

import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';

function SignInScreen(props){
    
    const [isUnknownUser, setIsUnknownUser] = useState(false)
    const [hasNoGarden, setHasNoGarden] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // if the user is unknown or if she has no garden yet (first garden), 
    // then show climateScreen else show HomeScreen
    // isUnknownUser value depends on the login process result
    var screenToDisplay;

    
    var handleSubmitConnectionRequest = ()=>{

      // appel au backend pour retrouver le user
      var user = async (user) => {
        // upload user
        const userData = await fetch('http://192.168.10.107:3000/users/signIn', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
        })

        //retranscription de la réponse pour qu'on puisse la lire
        const userBody = await userData.json()
        console.log("Mimic1: fetch signIn terminé")

        if(userBody.result == true){
   
          props.addToken(userBody.token)
          setUserExists(true)
          
        }  else {
          setErrorsSignin(userBody.error)
        }
    
    
      }

      console.log("Mimic1: fetch terminé")

      // call to backend: is the user known?
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

export default SignInScreen