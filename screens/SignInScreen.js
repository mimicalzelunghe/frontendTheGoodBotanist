import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Input from '../Components/Input';


function SignInScreen(props){

    const [isUnknownUser, setIsUnknownUser] = useState(true)
    const [hasNoGarden, setHasNoGarden] = useState(false)

    // if the user is unknown or if she has no garden yet (first garden), 
    // then show climateScreen else show HomeScreen
    // isUnknownUser value depends on the login process result
    var screenToDisplay;
    if(isUnknownUser){
      //screenToDisplay = <Button title="Go page to SignUp screen" onPress={() => props.navigation.navigate('SignUp')} />

    }else if(hasNoGarden){// else, go to HomeScreen and show the gardens
      //screenToDisplay = <Button title="Go page to Welcome screen" onPress={() => props.navigation.navigate('Welcome')} />

    }else{// else, display the garden of this well known user
      //screenToDisplay = <Button title="Go page to HomeScreen" onPress={() => props.navigation.navigate('Home')} />

    }
    

    return(
            
      <View style={styles.container}>
          <SafeAreaView style={styles.safe}>
                            
          <Image source={require('../assets/illustrations/logoVertPaleFondBlanc.png')} style={{ width: 200, height: 200}}/>
          <View style={styles.inputLayoutContainer}>
              <Input placeholder='E-mail'  errorDetails='errorDetails'  affichage="flex"></Input>
              <View  style={
                            {
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'left',
                                marginVertical: 8,
                                marginHorizontal: 16,
                            }
                        } > 
                      <Image style={{height: 24,
                                      width: 24,
                                      margin: 4,
                                      overflow: 'visible',
                                      resizeMode: "cover",}
                                    } source={require('../assets/icones/g1/icones24.png' )}/>
              </View>
              <Input placeholder='Mot de passe'  errorDetails='errorDetails'  affichage="flex"></Input>
              <View  style={
                            {
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'left',
                                marginVertical: 8,
                                marginHorizontal: 16,
                            }
                        } > 
                      <Image style={{height: 24,
                                      width: 24,
                                      margin: 4,
                                      overflow: 'visible',
                                      resizeMode: "cover",}
                                    } source={require('../assets/icones/g1/icones24.png' )}/>
              </View>

          </View>


        </SafeAreaView>

      </View>
    )
}

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
    Illustration : {
      marginVertical: 32,
      height: 200,
      width: 200,
    },
    input: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#F5F6EF',
      borderRadius:16,
      borderWidth:  2,
      borderColor:  '#A8ADAA',
      fontSize: 20,
      lineHeight: 22,
      color: "#2A2C2B",
      height: 54, 
      marginBottom: 50,
      width: 100,
      height: 100

    },

    inputLayoutContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  buttonBlock2: {
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


export default SignInScreen