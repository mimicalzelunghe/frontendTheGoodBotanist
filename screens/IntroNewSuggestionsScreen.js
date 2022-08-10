import React from "react";
import { StyleSheet, Text, Pressable, View, Image, SafeAreaView, ScrollView } from 'react-native';
import ButtonPrimaryExp from '../Components/ButtonPrimaryExp.js';


function IntroNewSuggestionsScreen(props) {

  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){console.log("onPressLeftIcon");}

  function onPress(){props.navigation.navigate("Suggestions")}


    return (
      
      <View style={styles.container}>



        
        <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 35,
        lineHeight: 40,
        color: "#2A2C2B",
        marginHorizontal: 16,
        textAlign: 'center',
        marginTop: 16,
        fontFamily: 'BreeSerif'

        }}>
          Prêts à découvrir les plantes les plus adaptées ?</Text>

        <View  style={styles.imageContainer} >
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/illustrationCongratsScreen.png')}
        /> 
        </View>
        
         
        
        <View style={{marginVertical: 16}}>
        <Text style={styles.titleXS}>Vous êtes désormais prêt à contribuer à la favorisation de la biodiversité dans votre ville.</Text>
        <Text style={styles.bodyMd}>En téte de liste vous retourverez les plantes les plus favorables à un retour de la biodiversité.</Text>
        </View>

        </ScrollView>

        <View style={styles.buttonBlock}>
        <ButtonPrimaryExp
        buttonLabel='Je découvre' 
        // iconName="check" 
        iconColor="white"
        text='Submit'
        onPress={onPress}
        />
        </View>

  
  
      </View>
    );
  }
  
  export default IntroNewSuggestionsScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor:"#FFFFFF"
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
      padding: 16,
    }, 
     
    titleXS: {
        fontSize: 19,
        lineHeight: 24,
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
        marginVertical: 16,      
      },
  
  
  })