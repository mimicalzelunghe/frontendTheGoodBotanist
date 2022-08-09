import React, {useState} from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';

import {connect} from 'react-redux';


function PlotDimensionScreen(props) {

    const [plotDimension, setPlotDimension] = useState('')
    
    function onPressRightIcon(){props.navigation.navigate("Home");}

    var handlePlotDimension = (plotDimension)=>{
        // TODO Mimic: plotDimension to put into redux
        //give idGarden tp onCreateGardenSumbit
        props.onChoosePlotDimension(plotDimension)
        
        props.navigation.navigate("Sunshine")
    
      }
    return (

      <View style={styles.container}>
        <Navbar 
        iconNameLeft="keyboard-backspace" 
        iconNameRight="close" 
        iconColorLeft="#ffffff" 
        iconColorRight="#1D6880" 
        navigationText='Nouvelle parcelle' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        // onPressLeftIcon={onPressLeftIcon} 
        onPressRightIcon={onPressRightIcon}/>


        <ScrollView style={{paddingTop: 24}}>
        <Text style={styles.titleXL}>Quelle est la taille de votre parcelle ?</Text>

        <View style={{paddingTop: 24}}>

           {/* Tuile de sélection */}
        <View  style={{
                backgroundColor: "#F1DFDE", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable} onPress={()=> {handlePlotDimension("petite")}}>

            <Image
                style={{ 
                    backgroundColor: "#C0DEDD",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/tailleSmall.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Petite</Text>
                    <Text style={styles.Description}>De 1 à 25 m2. Soit la taille de deux tables de ping pong.</Text>
            </View>
            
            </Pressable>
        </View>

         {/* Tuile de sélection */}
         <View  style={{
                backgroundColor: "#E6DFF1", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable} onPress={()=> {handlePlotDimension("moyenne")}}>

            <Image
                style={{ 
                    backgroundColor: "#C0DEDD",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/tailleMedium.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Moyenne</Text>
                    <Text style={styles.Description}>De 25 à 100 m2. Soit la taille d'un petit terrain de basket.</Text>
            </View>
            
            </Pressable>
        </View>
        {/* Tuile de sélection */}
        <View  style={{
                backgroundColor: "#C0DEDD", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable} onPress={()=> {handlePlotDimension("grande")}}>

            <Image
                style={{ 
                    backgroundColor: "#C0DEDD",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/tailleBig.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Grande</Text>
                    <Text style={styles.Description}>De 100 m2 à 300 m2. Soit la taille d'un terrain de tennis</Text>
            </View>
            
            </Pressable>
        </View>

        </View>

       
        

        

        </ScrollView>


  
  
      </View>
    );
  }

    // update the variable into the Redux store
    function mapDispatchToProps(dispatch) {
    return {
        onChoosePlotDimension: function(plotDimensionChosen) { 
            console.log("🚀 ~ file: PlotDimensionScreen.js ~ line 172 ~ mapDispatchToProps ~ plotDimensionChosen", plotDimensionChosen)
            
            dispatch( {type: 'dimension', dimension: plotDimensionChosen}) 
        }
    }
    }

    export default connect(
    null, 
    mapDispatchToProps
    )(PlotDimensionScreen);

  

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }, imageContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'

      },

      Illustration : {
        marginVertical: 32,
        height: 300,
        width: 300,
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
        marginTop: 8,
    },
    
    buttonBlock : {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginHorizontal: 16,
        marginVertical: 16,
    },
    pressable :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    textWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
    },
    icone: {
        height: 24,
        width: 24,
        margin: 8,
        overflow: 'visible',
        resizeMode: "cover",
    },  
    Titre: {
        display: "inline",
        fontSize: 20,
        lineHeight: 22,
        color: '#2A2C2B',
        marginBottom: 4
    },
    Description: {

        fontSize: 16,
        lineHeight: 22,
        color: '#2A2C2B',
    },

    
    flexRowInputContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        gap: 8,
    
    }
  
  })
  