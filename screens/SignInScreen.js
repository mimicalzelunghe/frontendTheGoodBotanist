import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, Button } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';

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
      <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
        <Text style={styles.titleXL}>Sign In</Text>
          <View style={styles.inputLayoutContainer}>
          <Text>Email</Text>
          <Input placeholder='Email' affichage="flex"/>
          <Text>Mot de Passe</Text>
          <Input placeholder='Mot de passe' affichage="flex"/>
          <Button title="S'inscrire"/>
          </View> 
       
        



        </SafeAreaView>

        <View style={styles.buttonBlock}>
        <ButtonPrimary buttonLabel='Valider' iconePath="{require('../assets/icones/white/Icones-20.png')}"/>
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
        marginTop: 80,
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



















/*

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
        <Text>Sign In</Text>

    
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
export default SignInScreen