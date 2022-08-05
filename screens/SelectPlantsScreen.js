import React from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp.js';
import ButtonTertiaryExp from '../Components/ButtonTertiaryExp.js';
import CellPlant from '../Components/CellPlant';

import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';


function SelectPlantsScreen() {

  var result = async () => {
    await fetch('http://192.168.10.120:3000/plants/uploadPlants', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'token=token'
  });
  result(true);}

  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){console.log("onPressLeftIcon");}

  function onPress(){console.log("onPress");}

  
    return (
      
      <SafeAreaView style={styles.container}>

        <Navbar 
        iconNameLeft="arrow-left" 
        iconNameRight="window-close" 
        iconColorLeft="#FFFFFF" 
        iconColorRight="#1D6880" 
        navigationText='Plantes existantes' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        // onPressLeftIcon={onPressLeftIcon} 
        onPressRightIcon={onPressRightIcon}/>



        <ScrollView style={styles.scrollView}>
        <Text style={styles.titleXL}>“Quelles plantes avez-vous déjà sur votre parcelle ?”</Text>

        <View style={{marginVertical: 16}}>
        <ButtonTertiaryExp
        buttonLabel='Scanner une plante' 
        iconName="camera" 
        iconColor="#1D6880"
        text='Submit'
        onPress={onPress}
        />
        </View>

        <CellPlant Img='https://jardinage.lemonde.fr/images/dossiers/historique/tilleul-172652.jpg' CellTitle='Titre de la carte' CellDescription='Description de la carte'/>


        </ScrollView>

        <View style={styles.buttonBlock}>

        <ButtonPrimaryExp
        buttonLabel='Valider' 
        // iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={onPress}
        />

        <ButtonSecondaryExp
        buttonLabel='Passer cette étape' 
        // iconName="check" 
        iconColor="#1D6880"
        text='Submit'
        onPress={onPress}
        />

        </View>

  
  
      </SafeAreaView>
    );
  }
  
  export default SelectPlantsScreen;
  
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