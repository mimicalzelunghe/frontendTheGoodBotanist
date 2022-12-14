import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';

import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {connect} from 'react-redux';

import backendIpAdress from '../parameters/param.js'

function GardenNameScreen(props) {

  console.log("store",props.store);
  console.log("token",props.store.token);

  const [gardenName, setGardenName] = useState('')

  var handleCreateNewGarden = async ()=>{

    // call the backend to create a new garden for this user
    //use climateSelected as parameter
    // return should be the gardenId
    
    // create the garden
    // update the user's garden list
    const gardenData = await fetch(backendIpAdress+'/gardens/createGarden', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `gardenName=${gardenName}&gardenClimate=${props.store.climate}&token=${props.store.token}`
    })

    //retranscription de la réponse pour qu'on puisse la lire
    const gardenId = await gardenData.json()

    console.log("Mimic1: gardenNameScreen - retour du fetch gardenBody = ", gardenId)
    
    //give idGarden tp onCreateGardenSumbit
    //TODO: change second argument to idVar
    props.onCreateGardenSubmit(gardenName, gardenId)

    // navigate to climate screen
    props.navigation.navigate("Home")

}

  return (

      
      <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
        <Text style={styles.titleXL}>Comment voulez vous appeller votre jardin ?</Text>
          <View style={styles.inputLayoutContainer}>
          <Input placeholder='Nom de votre jardin'  affichage="flex" onChangeText={(value)=> {setGardenName(value)}} value={gardenName}/>
          <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères'/>
          </View>

        </SafeAreaView>

        <View style={styles.buttonBlock}>

        <ButtonPrimaryExp
        buttonLabel='Valider' 
        iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={handleCreateNewGarden}
        />

        </View>

  
  
      </View>
    );
  }

  // pour lire une variable Redux
  function mapStateToProps(state) {
    console.log("state",state);

    return { store: state }
   }

  // update the variable into the Redux store
  function mapDispatchToProps(dispatch) {
    return {
      onCreateGardenSubmit: function(createdGardenName, createdIdGarden) { 
          dispatch( {type: 'idGarden', idGarden: createdIdGarden}) 
          dispatch( {type: 'gardenName', gardenName: createdGardenName}) 
      }
    }
   }
   
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(GardenNameScreen);

    
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
        fontSize: 14,
        lineHeight: 22,
        color: "#2A2C2B",
        textAlign: 'center',
        },
    buttonBlock : {
        flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 16,
    },
  
  })



  
