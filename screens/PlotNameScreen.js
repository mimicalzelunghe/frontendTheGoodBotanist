import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, Button, KeyboardAvoidingView } from 'react-native';
import Input from '../Components/Input';
import Caption from '../Components/Caption';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import Navbar from '../Components/Navbar.js';

import {connect} from 'react-redux';

import backendIpAddress from '../parameters/param.js'

function PlotNameScreen(props){

  const [plotName, setPlotName] = useState('')
  const [plotId, setPlotId] = useState(0)

  function onPressLeftIcon(){props.navigation.navigate("Soil");}
  function onPressRightIcon(){props.navigation.navigate("Home");}

  function handleValidation(){


          var plotIdCreated = 0
          var plotNameCreated = 0

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
            console.log("🚀 ~ file: PlotNameScreen.js ~ line 47 ~ createPlotName ~ plotData", plotData)
            console.log("🚀 ~ file: PlotNameScreen.js ~ line 48 ~ createPlotName ~ plotData._id", plotData._id)
            
            //save the plotId into the store
            plotIdCreated = plotData._id
            plotNameCreated = plotData.name
            
            // and fill plotIdCreated with the plotId return by the route
            // store the soil quality into redux
            props.onCreatePlotName(plotIdCreated, plotNameCreated)

          }

          createPlotName()

          props.navigation.navigate("Congrats")

    }//end handleValidation

    return(

      <View style={{flex:1}}>
      <View style={styles.container}>
      <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
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
            <Caption iconName="information-outline" iconColor="#6A6E6C" errorDetails='Maximum 25 caractères' textColor="#6A6E6C"/>
          </View> 
        </SafeAreaView>
        </KeyboardAvoidingView>
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
      </View>
    );
  }//end PlotNameScreen


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
          console.log("🚀 ~ file: PlotNameScreen.js ~ line 115 ~ mapDispatchToProps ~ plotNameCreated", plotNameCreated)
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
        marginTop: 8,},
    navbartop: {
      marginTop : 8,
    },
  
  })

  
