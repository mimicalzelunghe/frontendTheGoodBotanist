import React, {useState, useEffect} from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';

import {connect} from 'react-redux'

function CongratsScreen(props) {

  const [plotNameToDisplay, setPlotNameToDisplay] = useState('')


  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){console.log("onPressLeftIcon");}
  function onPress(){props.navigation.navigate("SelectsPlant")}


  useEffect(()=>{
    console.log("🚀 ~ file: CongratsScreen.js ~ line 26 ~ useEffect ~ props.store", props.store)

    //if garden name is not empty, then display it name otherwise, the name of the first garden will be displayed
    if(props.store.plotName != ""){
      setPlotNameToDisplay(props.store.plotName)
      console.log("🚀 ~ file: CongratsScreen.js ~ line 31 ~ CongratsScreen ~ plotNameToDisplay", props.store.plotName)
    }else{
      console.log("🚀 ~ file: CongratsScreen.js ~ line 33 ~ CongratsScreen ~ plotNameToDisplay", plotNameToDisplay)
      
    }  

  }, [])


    return (
      
      <SafeAreaView style={styles.container}>




        <ScrollView style={styles.scrollView}>
        <Text style={styles.titleXL}>Félicitation votre parcelle {plotNameToDisplay} a été créée</Text>

        <View  style={styles.imageContainer} >
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/illustrationCongratsScreen.png')}
        /> 
        </View>
        
         
        
        
        <Text style={styles.titleLG}>Vous pouvez dès à présent ajouter les plantes déjà présentes sur votre parcelle.</Text>
        <Text style={styles.bodyMd}>Vous pourrez ainsi découvrir les scores écologiques de votre parcelle.</Text>


        </ScrollView>

        <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='Ajouter les plantes existantes' 
        // iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={onPress}
        />
        </View>

  
  
      </SafeAreaView>
    );
  }


  // pour lire une variable Redux
  function mapStateToProps(state) {
    console.log("🚀 ~ file: CongratsScreen.js ~ line 139 ~ mapStateToProps ~ state", state)
    return { store: state }
   }

  export default connect(
    mapStateToProps, 
    null
  )(CongratsScreen);
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: "#FFFFFF"
    },
    scrollView: {
        paddingTop: 24,
        paddingBottom: 32,

        flex: 1,
        
      },imageContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'

      },
      Illustration : {
        marginVertical: 32,
        height: 200,
        width: 200,
      },
    buttonBlock: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      flexDirection: 'column',
      marginHorizontal: 16,
      marginVertical: 8,
    }, 
    titleXL: {
        fontSize: 35,
        lineHeight: 40,
        color: "#2A2C2B",
        marginHorizontal: 16,
        textAlign: 'center',
        fontFamily: 'BreeSerif'
    }, 
    titleLG: {
        fontSize: 26,
        lineHeight: 34,
        color: "#2A2C2B",
        marginHorizontal: 16,
        textAlign: 'center',
        fontFamily: 'BreeSerif'
    },
    bodyMd: {
        fontSize: 16,
        lineHeight: 22,
        color: "#2A2C2B",
        marginHorizontal: 16,
        textAlign: 'center',
        marginVertical: 16,},
  
  
  })