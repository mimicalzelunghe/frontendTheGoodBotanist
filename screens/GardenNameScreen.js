import React from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView } from 'react-native';
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

function GardenNameScreen(props) {

  var gardenName=''

  var handleCreateNewGarden = ()=>{

    // call the backend to create a new garden for this user
    //use climateSelected as parameter
    // return should be the gardenid
    props.onCreateGardenSubmit(gardenName)

    // navigate to climate screen
    props.navigation.navigate("Climate")

  }

  return (

      
      <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
        <Text style={styles.titleXL}>Comment voulez vous appeller votre jardin ?</Text>
          <View style={styles.inputLayoutContainer}>
          <Input placeholder='Nom de votre jardin'  affichage="flex"/>
          <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères'/>
          </View>

        </SafeAreaView>

        <View style={styles.buttonBlock}>

        <ButtonPrimaryExp
        buttonLabel='ButtonPrimaryExp' 
        iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={handleCreateNewGarden}
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

  // pour lire une variable Redux
  function mapStateToProps(state) {
    return { climateSelected: state.climate }
   }

     // update the variable into the Redux store
  function mapDispatchToProps(dispatch) {
    return {
      onCreateGardenSubmit: function() { 
          dispatch( {type: 'idGarden', idGarden: idGarden} ) 
      }
    }
   }
   
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(GardenNameScreen);

  
