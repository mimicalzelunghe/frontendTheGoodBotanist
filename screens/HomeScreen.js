import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

import {connect} from 'react-redux'

function HomeScreen(props) {

    const [gardenNameToDisplay, setGardenNameToDisplay] = useState('Nom jardin')

    
    useEffect(()=>{
        if(props.gardenNameToDisplay != ""){
            console.log("Mimic2: Homescreen - props.gardenNameToDisplay : ", props.gardenNameToDisplay )
            setGardenNameToDisplay("Mon jardin "+props.gardenNameToDisplay)
        }else{
            console.log("Mimic1: Homescreen - gardenNameToDisplay : ", gardenNameToDisplay )
    
        }    

    })

  
    return (
      
      <SafeAreaView style={styles.container}>
      <Navbar iconNameLeft="plus" iconNameRight="close" iconColorLeft="#1D6880" iconColorRight="#1D6880" navigationText=' '/>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.titleXL}>{gardenNameToDisplay}</Text>

        <View  style={styles.imageContainer} >
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/illustrationWelcomeScreen.png')}
        /> 
        </View>
        
         
        
        
        <Text style={styles.titleLG}>Votre jardin est encore vide.</Text>
        <Text style={styles.bodyMd}>Créez votre première parcelle et ajoutez les végétaux qui y habitent. C’est à l’echelle d’un bout de terrain que l’on peut améliorer notre écosystème.</Text>
        <Text style={styles.bodyMd}>Vous pouvez diviser votre jardin en autant de petites parcelles que vous avez de projets botaniques.</Text>


        </ScrollView>

        <View style={styles.buttonBlock}>
        <ButtonPrimary buttonLabel='Créer ma première parcelle' iconName="tree" iconColor="white" redirectionButton="HomeScreen"/>
        </View>

  
  
      </SafeAreaView>
    );
  }
  

  // pour lire une variable Redux
  function mapStateToProps(state) {
    console.log("Mimic3: HomeScreen - dans mapStateTpProps - valeur de gardenName :", state.gardenName)

    return { gardenNameToDisplay: state.gardenName }
   }

  export default connect(
    mapStateToProps, 
    null
  )(HomeScreen);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    scrollView: {
        marginTop: 24,
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
  
