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

import backendIpAddress from '../parameters/param.js'

function PlotNameScreen(props){

  const [plotName, setPlotName] = useState('')

  function onPressLeftIcon(){props.navigation.navigate("Soil");}
  function onPressRightIcon(){props.navigation.navigate("Home");}

  function handleValidation(){


          var plotIdCreated = 0
          var plotNameCreated = ''

          // waiting for the call to the backend  to create the plotId
          // use the var plotId as it will be the return of the call function
          console.log("🚀 ~ file: PlotNameScreen.js ~ line 27 ~ handleValidation")

          // create the garden
          // update the user's garden list
          var createPlotName = async ()=>{
              const rawPlotData = await fetch(backendIpAddress+'/plots/createPlot', {
              method: 'POST',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              body: `plotName=${plotName}&plotDimension=${props.store.dimension}&plotSunshine=${props.store.sunshine}&plotSoil=${props.store.soil}&gardenId=${props.store.idGarden}&token=${props.store.token}`
            })
                  
          //retranscription de la réponse pour qu'on puisse la lire
          const plotData = await rawPlotData.json() 
          console.log("🚀 ~ file: PlotNameScreen.js ~ line 45 ~ createPlotName ~ plotData", plotData)
          
          //save the plotId into the store
          //TODO: to be tested
          plotIdCreated = plotData._id
          plotNameCreated = plotData.name
          setPlotName(plotData.name)

          // and fill plotIdCreated with the plotId return by the route
          // store the soil quality into redux
          //props.onCreatePlotName(plotIdCreated, plotNameCreated)

          }
          props.onCreatePlotName(plotIdCreated, plotName)

          createPlotName()

          //props.navigation.navigate("SelectsPlant")
          //TODO: uncomment previous code line
          props.navigation.navigate("Congrats")
    }

    return(
      <View style={styles.container}>
        <View style={styles.navbartop}>
        <Navbar iconNameLeft="keyboard-backspace" 
        iconNameRight="close" 
        iconColorLeft="#1D6880" 
        iconColorRight="#1D6880" 
        navigationText='' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        onPressRightIcon={onPressRightIcon}/>
          </View>
          <SafeAreaView style={styles.safe}>
          <Text style={styles.titleXL}>Comment voulez-vous appeller votre parcelle ?</Text>
          <View style={styles.inputLayoutContainer}>
            <Input placeholder='Nom de votre parcelle' affichage="flex" onChangeText={(value)=> {setPlotName(value)}} value={plotName} />
            <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' />
          </View> 
        </SafeAreaView>

        <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='Enregistrer la nouvelle parcelle' 
        // iconName="check" 
        // iconColor="white"
        text='Submit'
        onPress={handleValidation}
        />
        </View>

      </View>
    );
  }



  // pour lire une variable Redux
  function mapStateToProps(state) {
    console.log("🚀 ~ file: PlotNameScreen.js ~ line 93 ~ mapStateToProps ~ state", state)
    return { store: state }
   }

    // update the variable into the Redux store
    function mapDispatchToProps(dispatch) {
    return {
      onCreatePlotName: function(plotIdCreated, plotNameCreated) { 
          console.log("🚀 ~ file: PlotNameScreen.js ~ line 114 ~ mapDispatchToProps ~ plotIdCreated", plotIdCreated)
          console.log("🚀 ~ file: PlotNameScreen.js ~ line 115 ~ mapDispatchToProps ~ plotIdCreated", plotNameCreated)
          dispatch( {type: 'plotId', plotId: plotIdCreated}) 
          dispatch( {type: 'plotName', plotName: plotNameCreated}) 
      }
    }
    }

  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(PlotNameScreen);
  
  
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

  
