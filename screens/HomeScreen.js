import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

import {connect} from 'react-redux'

import backendIpAddress from '../parameters/param.js'


function HomeScreen (props)  {



  var redirectionCreatePlot = function() {props.navigation.navigate("PlotDimension")};


  function homeScreenEmpty () {

    return (
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

      <View style={styles.buttonBlock}>
      <ButtonPrimaryExp
        buttonLabel='Créer ma première parcelle' 
        iconName="tree" 
        iconColor="white"
        text='Submit'
        onPress={redirectionCreatePlot}
        />
      
      </View>

      </ScrollView>)
    

  }



  function homeScreenContent () {
    return (
      <Text> Coucou</Text>
    )
  }



  const [gardenNameToDisplay, setGardenNameToDisplay] = useState('Nom jardin')
  const [userGardens, setUserGardens] = useState([])
  const [gardenIdToDisplay, setGardenIdToDisplay] = useState('')
  const [gardenClimateId, setGardenClimateId] = useState('')

  function onPressLeftIcon(){console.log("onPressLeftIcon");}
  function onPressRightIcon(){console.log("onPressRightIcon");}

    /* Before displaying the component, load all user's gardens, */
    useEffect(()=>{

      var result = async () => {
        //get all the user's garden
        var rawGardens = await fetch(backendIpAddress+'/gardens/uploadUserGardens', {
                        method: 'POST',
                        headers: {'Content-Type':'application/x-www-form-urlencoded'},
                        body: `token=${props.store.token}`
                      })

      //retranscription de la réponse pour qu'on puisse la lire
        const gardensBody = await rawGardens.json()
        console.log("Mimic9: returned gardens : ", gardensBody)

        setUserGardens(gardensBody.gardensId[0])
        setGardenNameToDisplay(gardensBody.gardensId[0].garden_name)
        setGardenIdToDisplay(gardensBody.gardensId[0]._id)
        setGardenClimateId(gardensBody.gardensId[0].gardenClimate)
        
        //save the gardenId and the climateId into the store
        props.onLoadGarden(gardensBody.gardensId[0]._id, gardensBody.gardensId[0].gardenClimate)

      }
              
      result();

      //if garden name is not empty, then display it name otherwise, the name of the first garden will be displayed
      if(props.store.gardenName != ""){
        setGardenNameToDisplay(props.store.gardenName)
      }else{
        console.log("Mimic1: Homescreen - gardenNameToDisplay : ", gardenNameToDisplay )

      }  
    
    }, [])

    console.log("Mimic8: HomeScreen - useEffect - user's garden :", userGardens)

    return (
      
      <SafeAreaView style={styles.container}>

        <Navbar 
        iconNameLeft="plus" 
        iconNameRight="square-edit-outline" 
        iconColorLeft="#1D6880" 
        iconColorRight="#1D6880" 
        navigationText='' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        onPressRightIcon={onPressRightIcon}/>

        
        {homeScreenEmpty()}
        

  
  
      </SafeAreaView>
    );
  }
  

  // pour lire une variable Redux
  function mapStateToProps(state) {
    console.log("🚀 ~ file: HomeScreen.js ~ line 139 ~ mapStateToProps ~ state", state)
    return { store: state }
   }

  // update the variable into the Redux store
  function mapDispatchToProps(dispatch) {
    return {
      // the first gaden name is the name to display on top of the screen
      onReadUserGardens: function(firstGarden) { 
          dispatch( {type: 'gardenName', idGarden: firstGarden}) 
      },
      onLoadGarden: function(firstGardenId, climateId) { 
        dispatch( {type: 'idGarden', idGarden: firstGardenId}) 
        dispatch( {type: 'idClimate', idClimate: climateId}) 
      }
    }
   }

  export default connect(
    mapStateToProps, 
    mapDispatchToProps
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
  
