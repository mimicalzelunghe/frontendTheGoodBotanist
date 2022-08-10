import React, {useEffect, useState} from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import backendIpAdress from '../parameters/param.js';


import ButtonTertiaryExp from '../Components/ButtonTertiaryExp.js';
import Navbar from '../Components/Navbar.js';
import ModalPlant from "../Components/ModalPlant";
import TilePlant from '../Components/TilePlant';




function PlotPlantsScreen(props) {


  var token = props.store.token;
 
  const [tablePlantList,setTablePlantList] = useState([]);


  //Initialisation d'un comportement de reverse dataflow pour récupérer les informations de la plantes cliquée et les faire remonter dans le composant parent
  const [plantInfoModal, setPlantInfoModal] = useState([])
  const [activateModal, setActivateModal] = useState(false)
  //fermeture de la modale par reverse dataflow
  function handleActivateModal() {
    setActivateModal(false)
  }
  //fermeture de la modale par reverse dataflow


  var modalInfoPress = (infoModal) => {
    setPlantInfoModal(infoModal)
    console.log('plantInfoModal:',plantInfoModal);
    setActivateModal(true)
  } 
   //Initialisation d'un comportement de reverse dataflow pour récupérer les informations de la plantes cliquée et les faire remonter dans le composant parent




  //Rechercher la liste des plantes dans la base de donnée ======================================
  
  useEffect(() => {
  var listPlant = async () => {
    var rawResponse = await fetch(backendIpAdress+'/plants/uploadPlants');
    var response = await rawResponse.json();
    setTablePlantList([...response]);
   }
   listPlant();
  }, []);
    //Rechercher la liste des plantes dans la base de donnée ======================================

  //     //Activation des filtres de recherches ======================================
  //     const [chipFilterPlantActivation, setChipFilterPlantActivation]= useState(false);
  //     const [chipFilterSmallTreeActivation, setChipFilterSmallTreeActivation]= useState(false);
  //     const [chipFilterTreeActivation, setChipFilterTreeActivation]= useState(false);

  //     const [plantList, setPlantList] = useState([]);

  //     const [selectedType, setSelectedType] = useState();

  //     // Add default value on page load
  //     useEffect(() => {
  //       setPlantList(tablePlantList);
  //     }, []);

  //     // Function to get filtered list
  //     function getFilteredList() {
  //       // Avoid filter when selectedCategory is null
  //       if (!selectedCategory) {
  //         return plantList;
  //       }
  //       return plantList.filter((item) => item.type === selectedCategory);
  //     }

  //     // Avoid duplicate function calls with useMemo
  //     var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  //     // function handleCategoryChange(event) {
  //     //   setSelectedCategory(event.target.value);
  //     // }
      
  //     function plantFilterActivation() {
  //       if(chipFilterPlantActivation === false){
  //         setChipFilterPlantActivation(true);
  //         setSelectedCategory([...]);

  //       }
  //     }


      //Activation des filtres de recherches ======================================


  


  


  //Rechercher la liste des plantes dans la base de donnée =======================================


  // function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){props.navigation.navigate("Home")}

  function onPress(){console.log("onPress");}
  function handleValidation(){
    props.navigation.navigate("BottomNavigator")
    }

  
    return (
      
      <View style={styles.container}>
        <ModalPlant activateModal={activateModal} handleActivateModal={handleActivateModal} plantInfoModal={plantInfoModal}/>
        <View style={{width: "100%"}}>

        <Navbar 
        iconNameLeft="arrow-left" 
        iconNameRight="window-close" 
        iconColorLeft="#1D6880" 
        iconColorRight="#FFFFFF" 
        navigationText='' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        // onPressRightIcon={onPressRightIcon}
        />
                </View>




        <ScrollView style={styles.scrollView}>
          <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 35,
      lineHeight: 40,
      color: "#2A2C2B",
      marginHorizontal: 16,
      textAlign: 'center',
      marginTop: 16,
      fontFamily: 'BreeSerif'
      }}>
        Le potager</Text>

      
      <View style={{
        flex: 1,
        
        flexDirection: "column",
        alignItems: "center",
        padding: 8,
        borderWidth: 2,
       borderColor: "#1D6880",
       margin: 24,
       borderRadius: 8,

      }}>
      <Text style={{
        fontSize: 16,
        lineHeight: 22,
        color: "#1D6880",
        fontFamily: 'BreeSerif'

      }}>
      BIO-SCORE</Text>
      <Text style={{
         fontSize: 35,
         lineHeight: 40,
         color: "#1D6880",
         fontFamily: 'BreeSerif'

      }}>
      67</Text>
      </View>

          </View>
        
        

       <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 8}}>
       {tablePlantList.map((plant, i) => (
        <TilePlant Img='https://jardinage.lemonde.fr/images/dossiers/historique/tilleul-172652.jpg' labelTitle={plant.common_name} plantId={plant._id} token={token} plantInfo={plant} modalInfoPressParent={modalInfoPress} store={props.store} />
        ))}
       </View>
        </ScrollView>

      </View>
    );
  }
  
// update the variable into the Redux store
function mapStateToProps(state) {

  return { store: state }
 }
 
export default connect(
  mapStateToProps, 
  null
)(PlotPlantsScreen);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor:"#ffffff",
      alignItems: "center"

    },
    scrollView: {
        // paddingTop: 24,
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
    buttonBlock : {
        flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 16,
    },
  
  })