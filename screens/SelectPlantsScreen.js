import React, {useState, useEffect} from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp.js';
import ButtonTertiaryExp from '../Components/ButtonTertiaryExp.js';
import CellPlant from '../Components/CellPlant';
import {connect} from 'react-redux';


import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';
import backendIpAddress from '../parameters/param.js'



function SelectPlantsScreen(props) {


  var token = props.store.token;
 
  const [hasPermission, setHasPermission] = useState(false);
  const [plantsList, setPlantsList] = useState([]);

  console.log("props.store",props.store)


  
  useEffect(() => {
    
    //Rechercher la liste des plantes dans la base de donnée ======================================
    var listPlant = async () => {
    var rawResponse = await fetch(backendIpAddress+'/plants/uploadPlants');
    var response = await rawResponse.json();
    
    setPlantsList(response)
    }
    listPlant()

  }, []);

  console.log("🚀 ~ file: SelectPlantsScreen.js ~ line 58 ~ listPlant ~ plantList", plantsList)

  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){console.log("onPressLeftIcon");}

  function onPress(){console.log("onPress");}

  function onPressCamera(){
    console.log("onPress");
  
  }

  var handleValidation = async ()=>{
    props.navigation.navigate("IntroNewSuggestions")
    }

    var tabPlantes = []
    plantsList.map((plant) => {
      tabPlantes.push(<CellPlant Img='https://jardinage.lemonde.fr/images/dossiers/historique/tilleul-172652.jpg' CellTitle={plant.common_name} plantId={plant._id} token={token} climateId={props.store.climate} plotId={props.store.plotId} />)
      })

  
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
        onPress={onPressCamera}
        />
        </View>

        {tabPlantes}

        </ScrollView>

        <View style={styles.buttonBlock}>

        <ButtonPrimaryExp
        buttonLabel='Suivant' 
        // iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={handleValidation}
        />

        </View>

  
  
      </SafeAreaView>
    );
  }
  
// update the variable into the Redux store
function mapStateToProps(state) {
console.log("🚀 ~ file: SelectPlantsScreen.js ~ line 124 ~ mapStateToProps ~ state", state)

  return { store: state }
 }
 
export default connect(
  mapStateToProps, 
  null
)(SelectPlantsScreen);



  
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