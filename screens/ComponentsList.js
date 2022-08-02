import React from "react";
import { StyleSheet, Text, Pressable, View, TextInput, Image, ImageBackground } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';



function ComponentsList() {
  return (
    
    <View style={styles.container}>
      <Navbar iconNameLeft="keyboard-backspace" iconNameRight="close" iconColorLeft="#6A6E6C" iconColorRight="#6A6E6C" navigationText='titre de navigation'/>
      <Input placeholder='Placeholder' errorDetails='errorDetails'  affichage="flex"/>
      <Caption iconePath="{require('../assets/icones/g1/icones-20.png')}" errorDetails= 'Petit message'/>

      <View style={styles.buttonBlock}>
      <ButtonPrimary buttonLabel='Valider' iconName="check" iconColor="white"/>
        <ButtonSecondary buttonLabel='Boutton secondaire' iconePath="{require('../assets/icones/white/Icones-20.png')}"/>
        <ButtonTerciary buttonLabel='Boutton secondaire' iconePath="{require('../assets/icones/white/Icones-20.png')}"/>
      </View>
      
      <CardSurvey backgroundColor= '#F5F6EF' CardTitle='Titre de la carte' CardDescription='Description de la carte' />
      


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
