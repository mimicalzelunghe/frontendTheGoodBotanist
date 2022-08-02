import React from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


function WelcomeScreen() {
    return (
      
      <View style={styles.container}>
        <SafeAreaView style={styles.safe}>
        <Text style={styles.titleXL}>Comment voulez vous appeller votre jardin ?</Text>
          <View style={styles.inputLayoutContainer}>
          <Input placeholder='Nom de votre jardin' errorDetails='errorDetails'  affichage="flex"/>
          <View  style={
            {
                flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
            }
        } > 
        <Image style={
            {height: 24,
                width: 24,
                margin: 4,
                overflow: 'visible',
                resizeMode: "cover",}
        } source={require('../assets/icones/g1/icones24.png' )}/>
        <Text style={
          {
            fontSize: 14,
        lineHeight: 22,
        color: "#6A6E6C",
        textAlign: 'center',
          }
        }>Ne dépassez pas 25 caractéres</Text>
        </View>
          </View>

        </SafeAreaView>

        <View style={styles.buttonBlock}>
        <ButtonPrimary buttonLabel='Valider' iconName="check"/>
        </View>

  
  
      </View>
    );
  }
  
  export default WelcomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    safe: {
        marginTop: 80,
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
        fontSize: 14,
        lineHeight: 22,
        color: "#2A2C2B",
        textAlign: 'center',
        },
    buttonBlock : {
        flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 16,
    },
  
  })
  
