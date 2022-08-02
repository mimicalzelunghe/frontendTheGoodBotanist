import React from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';


function ClimateScreen() {
    return (
      
      <View style={styles.container}>

        <Navbar/>
        <ScrollView style={styles.safe}>
        <Text style={styles.titleXL}>À quel climat est soumis votre jardin ?</Text>
        <View  style={styles.imageContainer} >
        <Image
          style={styles.Illustration}
          source={require('../assets/illustrations/illustrationMapClimateScreen.png')}
        /> 
        </View>


        {/* Tuile de sélection */}
        <View  style={{
                backgroundColor: "#F5F6EF", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable}>

            <View
                style={{ 
                    backgroundColor: "#C0DEDD",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Climat océanique</Text>
                    <Text style={styles.Description}>Le climat océanique est caractérisé par des températures douces et une pluviométrie relativement abondante (en liaison avec les perturbations venant de l'Atlantique), répartie tout au long de l'année avec un léger maximum d'octobre à février.</Text>
            </View>
            
            </Pressable>
        </View>

        <View  style={{
                backgroundColor: "#F5F6EF", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable}>

            <View
                style={{ 
                    backgroundColor: "#CFF1D5",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Climat semi-océanique</Text>
                    <Text style={styles.Description}>Le climat océanique altéré est une zone de transition entre le climat océanique et les climats de montagne et le climat semi-continental. Les écarts de température entre hiver et été augmentent avec l'éloignement de la mer. La pluviométrie est plus faible qu'en bord de mer, sauf aux abords des reliefs.</Text>
            </View>
            
            </Pressable>
        </View>

        <View  style={{
                backgroundColor: "#F5F6EF", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable}>

            <View
                style={{ 
                    backgroundColor: "#A2DC75",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Climat continental</Text>
                    <Text style={styles.Description}>En climat semi-continental, les étés sont chauds et les hivers rudes, avec un grand nombre de jours de neige ou de gel. La pluviométrie annuelle est relativement élevée, sauf en Alsace, région bénéficiant de l'effet protecteur des Vosges (effet de fœhn). Les pluies sont plus importantes en été, souvent à caractère orageux.</Text>
            </View>
            
            </Pressable>
        </View>

        <View  style={{
                backgroundColor: "#F5F6EF", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable}>

            <View
                style={{ 
                    backgroundColor: "#E4C761",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Climat méditéranéen</Text>
                    <Text style={styles.Description}>Le climat méditerranéen est caractérisé par des hivers doux et des étés chauds, un ensoleillement important et des vents violents fréquents. On observe peu de jours de pluie, irrégulièrement répartis sur l'année.
À des hivers et étés secs succèdent des printemps et automnes très arrosés, souvent sous forme d'orages (40 % du total annuel en 3 mois). Ces précipitations peuvent apporter en quelques heures 4 fois plus d'eau que la moyenne mensuelle en un lieu donné, notamment à proximité du relief (épisode méditerranéen).</Text>
            </View>
            
            </Pressable>
        </View>

        <View  style={{
                backgroundColor: "#F5F6EF", 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable}>

            <View
                style={{ 
                    backgroundColor: "#7B9BBC",
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 50
                
                }}
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View style={styles.textWrapper}>
                    <Text style={styles.Titre}>Climat montagnard</Text>
                    <Text style={styles.Description}>En climat de montagne, la température décroît rapidement en fonction de l'altitude. On observe une nébulosité minimale en hiver et maximale en été. Les vents et les précipitations varient notablement selon le lieu.</Text>
            </View>
            
            </Pressable>
        </View>

        

        

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
        marginTop: 80,

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
  