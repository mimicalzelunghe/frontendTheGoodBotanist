import React from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';

function ClimateScreen() {
    return (
      
      <View style={styles.container}>
        <ScrollView style={styles.safe}>
        <Text style={styles.titleXL}>À quel climat est soumis votre jardin ?</Text>
        <View  style={styles.imageContainer} >
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/illustrationMapClimateScreen.png')}
        /> 
        </View>
        
        <Text style={styles.titleLG}>La biodiversité commence dans votre jardin.</Text>
        <Text style={styles.bodyMd}>Chaque jardin a sa signnature écologique et nous vous aidons à l’améliorer.</Text>
        </ScrollView>


  
  
      </View>
    );
  }
  
  export default ClimateScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    safe: {
        marginTop: 80,
        
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
        marginTop: 8,},
    buttonBlock : {
        flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 16,
    }
  
  })
  