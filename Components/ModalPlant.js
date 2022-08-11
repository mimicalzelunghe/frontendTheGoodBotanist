import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ButtonSecondaryExp from '../Components/ButtonSecondaryExp.js';
import { CustomStyle } from "../CustomStyle";
import Chart from '../Components/Chart.js';




const image = { uri: "https://media.gerbeaud.net/2015/03/640/tilleul.jpg" };

const ModalPlant = (props) => {


  // const [modalVisible, setModalVisible] = useState(props.activateModal);

  const [heroHeaderHeight, setHeroHeaderHeight] = useState(150)
  

  // Apparition des tags
  var tagAttractBirds = () => {

    if(props.plantInfoModal.attracts_birds === "oui" || "Oui"){
      return ( <View style={{
          borderWidth:  1,
          borderColor:  '#FFA34E',
          borderRadius:4,
          paddingHorizontal: 8,
          paddingVertical: 4,
          marginRight: 8,
          marginVertical: 4
        }}>
    
      <Text style={{ 
        fontSize: 11,
        lineHeight: 13,
        color: "#FFA34E",
      }}>ATTIRE LES OISEAUX</Text>
      </View>
      )
      } }

      var tagAttractButterflies = () => {

        if(props.plantInfoModal.attracts_butterflies === "oui" || "Oui"){
          return ( <View style={{
              borderWidth:  1,
              borderColor:  '#FFA34E',
              borderRadius:4,
              paddingHorizontal: 8,
              paddingVertical: 4,
              marginRight: 8,
              marginVertical: 4
            }}>
        
          <Text style={{ 
            fontSize: 11,
            lineHeight: 13,
            color: "#FFA34E",
          }}>ATTIRE LES PAPILLONS</Text>
          </View>
          )
          } }
      
      var tagPollinator = () => {

            if(props.plantInfoModal.attracts_butterflies !== ""){
              return ( <View style={{
                  borderWidth:  1,
                  borderColor:  '#FFA34E',
                  borderRadius:4,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  marginRight: 8,
                  marginVertical: 4
                }}>
            
              <Text style={{ 
                fontSize: 11,
                lineHeight: 13,
                color: "#FFA34E",
              }}>POLÉNISATEUR</Text>
              </View>
              )
              } }

  // Apparition des tags


        



  return (
   

      <Modal
        animationType="slide"
        transparent={true}
        visible={props.activateModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          props.handleActivateFilter();
        }}
      >
       
        <View style={{
            flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000030"
          }}>

            
       
          <View style={{ 
            flex:1,
            flexDirection: "row",
            marginTop: 64,
            marginHorizontal: 16,
            backgroundColor: "white",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            alignItems: "center",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 2
          }}}>
                
                <View style={{ 
            flex:1,
            flexDirection: "colum",
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
            
          }}>
            
            {/* //HeroHeader Image Background ==================================================*/}
            <ImageBackground source={image} resizeMode="cover" style={{
              height: heroHeaderHeight,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}>
            <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent:'space-between',
                  height: 56,
                  paddingHorizontal: 16,
                  }} > 

                      <MaterialCommunityIcons style={{padding:8 }} name={"close"} size={30} color={"#CCCCCC00"} onPress={props.onPressLeftIcon}/>
                      <Text style={styles.bodyMD}></Text>
                      <View style={{ backgroundColor: "#00000010", borderRadius: 4}}>
                        <MaterialCommunityIcons name={"close"} size={30} color={"#FFFFFF"} onPress={() => props.handleActivateModal()}/>
                      </View>
                  </View>

            </ImageBackground>
            {/* //HeroHeader Image Background ==================================================*/}


            {/* //Main Scrollable Content ==================================================*/}

                  <ScrollView style={{ flex: 1,
                  flexDirection: "column",
                  paddingHorizontal: 16,
                  paddingTop: 16,
                  }}>
                  <Text style={{
                    fontSize: 26,
                    lineHeight: 34,
                    color: "#2A2C2B",
                    textAlign:"center",
                    marginBottom: 16,
                    fontFamily: 'BreeSerif'
                  }}>{props.plantInfoModal.common_name}</Text>

                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-between",
                    backgroundColor: "#F5F6EF",
                    padding: 16,
                    marginBottom: 16,
                    borderWidth: 1,
                    borderColor: "#E2E7E4",
                    borderRadius: 16
                  }}>

                    <View style={{
                      flex: 1,
                    
                    
                    }}>
                    <Text style={{
                   fontSize: 19,
                   lineHeight: 24,
                   color: "#2A2C2B",
                    textAlign:"left",
                    marginRight: 16,
                    fontFamily: 'BreeSerif'
                    
                  }}>Score de
                  bio-compatibilité :</Text>

                  </View>
                  <Text style={{
                   fontSize: 35,
                   lineHeight: 40,
                   color: "#2A2C2B",
                    textAlign:"center",
                  }}>{props.plantInfoModal.globalScore}</Text>


                  </View>
              
            
                  {/* //Tag ==================================================*/}

                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:"flex-start",
                    flexWrap: 'wrap',

                  }}>
                  
                  {tagPollinator()}
                  {tagAttractBirds()}
                  {tagAttractButterflies()}
      

                  </View>
                  

                  {/* //Tag ==================================================*/}

                    <View style={{
                      flex: 1,
                    }}>
                      <Text style={{ 
                    marginVertical:16,
                    fontSize: 16,
                    lineHeight: 22,
                    color: "#2A2C2B",
                  }}>{props.plantInfoModal.Description}

                  </Text>
                    </View>
                  

                  <Text style={{
                    fontSize: 19,
                    lineHeight: 24,
                    color: "#2A2C2B",
                    textAlign: "center",
                    marginVertical: 16,
                    fontFamily: 'BreeSerif'
                  }}>Compatibilité avec la parcelle :</Text>

                  <View style={{
                    flex:1,
                    flexDirection: "row",
                    justifyContent: "center"
                  }}>
                  <Chart style={{width: 100}} score={props.plantInfoModal.score} />
                    
                  </View>



            </ScrollView>
            {/* //Main Scrollable Content ==================================================*/}


                
            
            {/* //Buttonblock ================================================== */}
            <View style={{
              
               flexDirection: 'row',
               gap: 8,
               backgroundColor: "#FFFFFF",
               flexDirection: 'column',
               paddingHorizontal: 16,
               paddingVertical: 16,

               
            }}>

                <ButtonSecondaryExp
                buttonLabel='Fermer' 
                // iconName="check" 
                iconColor="#1D6880"
                text='Submit'
                onPress={() => props.handleActivateModal()}
                />

            </View>
            {/* //Buttonblock ==================================================*/}


                
                  

            </View>
          
            
          </View>
        </View>
      </Modal>

  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#00000030"
  },
  center: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#00000030"
  },
  modalView: {
    flex:1,
    flexDirection: "column",
    marginTop: 64,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalPlant;