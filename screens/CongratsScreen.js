import React from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';


function CongratsScreen() {

  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){console.log("onPressLeftIcon");}

  
    return (
      
      <SafeAreaView style={styles.container}>




        <ScrollView style={styles.scrollView}>
        <Text style={styles.titleXL}>“Félicitation votre parcelle “Nom de la parcelle” a été créée”</Text>

        <View  style={styles.imageContainer} >
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/illustrationCongratsScreen.png')}
        /> 
        </View>
        
         
        
        
        <Text style={styles.titleLG}>Vous allez pouvoir découvrir les plantes les plus adaptées à votre parcelle.</Text>
        <Text style={styles.bodyMd}>Vous êtes désormais prêt à contribuer à la favorisation de la biodiversité dans votre ville.</Text>


        </ScrollView>

        <View style={styles.buttonBlock}>
        <ButtonPrimary buttonLabel='Créer ma première parcelle' iconName="tree" iconColor="white" redirectionButton="HomeScreen"/>
        </View>

  
  
      </SafeAreaView>
    );
  }
  
  export default CongratsScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start'
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