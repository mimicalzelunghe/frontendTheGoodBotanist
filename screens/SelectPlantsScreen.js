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

  console.log("store", props.store);

  var token = props.store.token;
 
  const [tablePlantList,setTablePlantList] = useState([]);


  //Rechercher la liste des plantes dans la base de donnée ======================================
  
  useEffect(() => {
    
    //var listPlant = async () => {
    //var rawResponse = await fetch(backendIpAddress+'/plants/uploadSuggestedPlants');

    var suggestPlants = async ()=>{
      const rawSuggestedPlants = await fetch(backendIpAddress+'/plants/uploadSuggestedPlants', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `plotId=${props.store.plotid}&gardenId=${props.store.idGarden}&token=${props.store.token}`
    })
    var suggestedPlants = await rawSuggestedPlants.json();
    // console.log("🚀 ~ file: SelectPlantsScreen.js ~ line 29 ~ listPlant ~ response", response)
    
    setTablePlantList([...response]);
  }

  suggestPlants();
  }, []);

  //Rechercher la liste des plantes dans la base de donnée =======================================


  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){console.log("onPressLeftIcon");}

  function onPress(){console.log("onPress");}
  function handleValidation(){
    props.navigation.navigate("Congrats")
    }

  
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

        {tablePlantList.map((plant) => (
        <CellPlant Img='https://jardinage.lemonde.fr/images/dossiers/historique/tilleul-172652.jpg' CellTitle={plant.common_name} plantId={plant._id} token={token} />
        ))}


        </ScrollView>

        <View style={styles.buttonBlock}>

        <ButtonPrimaryExp
        buttonLabel='Valider' 
        // iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={handleValidation}
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
  
// update the variable into the Redux store
function mapStateToProps(state) {

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