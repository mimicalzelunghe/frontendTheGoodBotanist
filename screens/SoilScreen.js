import React from "react";
import { StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView } from 'react-native';
import Input from '../Components/Input';
import TextsStyle from '../Components/TextsStyle';
import Caption from '../Components/Caption';
import ButtonPrimary from '../Components/ButtonPrimary.js';
import ButtonSecondary from '../Components/ButtonSecondary.js';
import ButtonTerciary from '../Components/ButtonTerciary.js';
import CardSurvey from '../Components/CardSurvey.js';
import Navbar from '../Components/Navbar.js';



function SoilScreen(props) {

    function onPressRightIcon(){console.log("onPressRightIcon");}
    function onPressLeftIcon(){console.log("onPressLeftIcon");}

    var handleSoilSelection = ()=>{
        // TODO Mimic: plotDimension to put into redux
        
        props.navigation.navigate("PlotName")
    
      }


    
  return (

    <View style={styles.container}>

        <Navbar 
        iconNameLeft="keyboard-backspace" 
        iconNameRight="close" 
        iconColorLeft="#6A6E6C" 
        iconColorRight="#6A6E6C" 
        navigationText='Nouvelle parcelle' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        onPressRightIcon={onPressRightIcon}/>

      <ScrollView style={{paddingTop: 24}}>
      <Text style={styles.titleXL}>Quel est le type de sol ?</Text>

      <View style={{paddingVertical: 24, }}>

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
      
          <Pressable style={styles.pressable} onPress={()=> { handleSoilSelection()} }>

          <Image
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
                  <Text style={styles.Titre}>Sol argileux</Text>
                  <Text style={styles.Description}>Mon sol est difficile à travailler. Il est d’aspect argileux. Il reste mouillé et humide longtemps après une pluie. Les particules sont fines voire très fines et s’associent facilement entre elles pour former des mottes compactes Il se tasse facilement lorsqu’on marche dessus. Il se craquelle en séchant.</Text>
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
      
          <Pressable style={styles.pressable} onPress={()=> { handleSoilSelection()}}>

          <Image
              style={{ 
                  backgroundColor: "#C0DEDD",
                  width: 80,
                  height: 80,
                  marginRight: 16,
                  resizeMode: 'cover',
                  borderRadius: 50
              
              }}
              source={require('../assets/illustrations/expositionMedium.png')}
              />
      
              <View style={styles.textWrapper}>
                  <Text style={styles.Titre}>Sol calcaire</Text>
                  <Text style={styles.Description}>Mon sol a des teintes claires voire blanches. Il est léger et caillouteux. Lorsque je le mets dans du vinaigre, j’observe une effervescence franche.</Text>
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
      
          <Pressable style={styles.pressable} onPress={()=> { handleSoilSelection()}}>

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
                  <Text style={styles.Titre}>Sol sableux</Text>
                  <Text style={styles.Description}>Mon sol est facile à travailler. Il ne se tasse pas lorsqu’on marche dessus. Les grains ou particules sont plutôt gros et s’associent peu entre eux. Ils ne forment ni grumeaux ni mottes.</Text>
          </View>
          
          </Pressable>
      </View>

      {/* Tuile de sélection */}
      <View  style={{
              backgroundColor: "#F2EEE9", 
              borderRadius:16,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical:8,
              marginHorizontal: 16,
              paddingHorizontal:16,
              paddingVertical:16
      }} > 
      
          <Pressable style={styles.pressable} onPress={()=> { handleSoilSelection()}}>

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
                  <Text style={styles.Titre}>Sol limoneux</Text>
                  <Text style={styles.Description}>Mon sol est sensible au piétinement. Il se tasse aux endroits de passage récurrents. Une croûte craquelée se forme lorsqu’il sèche.</Text>
          </View>
          
          </Pressable>
      </View>

      </View>

     
      

      

      </ScrollView>




    </View>
  );
}

export default SoilScreen;

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
