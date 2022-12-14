import React,  { useState, useEffect }  from "react";
import { StyleSheet, Text, Pressable, View, TextInput, Image, ImageBackground } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import InputExp from '../Components/InputExp.js';
import Navbar from '../Components/Navbar.js';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp.js';
import ButtonTertiaryExp from '../Components/ButtonTertiaryExp.js';
import CellPlant from '../Components/CellPlant.js';








function ComponentsList() {

    //Nav settings
  function onPressLeftIcon(){console.log("onPressLeftIcon");}
  function onPressRightIcon(){console.log("onPressRightIcon");}
  //Nav settings

  //Button settings
  function onPress(){console.log("onPress");}
    //Button settings



  //InputExp settings
  const [inputValue, setInputValue] = useState({ name: "", price: "" });
  const { name, price } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
    //InputExp settings

    //CellPlantSetting
    

    //CellPlantSetting




  return (
    
    <View style={styles.container}>
      <Navbar iconNameLeft="keyboard-backspace" 
      iconNameRight="close" 
      iconColorLeft="#6A6E6C" 
      iconColorRight="#6A6E6C" 
      navigationText='titre de navigation' 
      redirectionIconeLeft="../screens/HomeScreen.js" 
      onPressLeftIcon={onPressLeftIcon} 
      onPressRightIcon={onPressRightIcon}/>

      <InputExp
      type="text"
      value={name}
      placeholder="Product Name"
      label="Name"
      name="name"
      onChangeText={handleChange}
      />
  
      <Caption iconePath="{require('../assets/icones/g1/icones-20.png')}" errorDetails= 'Petit message'/>


      

      <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='ButtonPrimaryExp' 
        iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={onPress}
        />

        <ButtonSecondaryExp
        buttonLabel='ButtonSecondaryExp' 
        iconName="check" 
        iconColor="#1D6880"
        text='Submit'
        onPress={onPress}
        />

        <ButtonTertiaryExp
        buttonLabel='ButtonTertiaryExp' 
        iconName="check" 
        iconColor="#1D6880"
        text='Submit'
        onPress={onPress}
        />

      </View>
      
      <CardSurvey backgroundColor= '#F5F6EF' CardTitle='Titre de la carte' CardDescription='Description de la carte'  />
      
      <CellPlant Img='https://jardinage.lemonde.fr/images/dossiers/historique/tilleul-172652.jpg' CellTitle='Titre de la carte' CellDescription='Description de la carte'/>

    </View>
  );
}

export default ComponentsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonBlock: {

    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
  },

})
