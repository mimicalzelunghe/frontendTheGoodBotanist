import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import backendIpAdress from '../parameters/param.js'


export default function CellPlant(props) {


    //conditions pour appliquer le toggle des checkbox
    const [plantAdded, setPlantAdded] = useState("default");
    

    //Mise en place des settings front du toggle
        var checkClick = async ()=> {
    
            if(plantAdded === "default") {
            setPlantAdded("active");
            await fetch(backendIpAdress+'/plants/addPlant', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `plantId=${props.plantId}&token=${props.token}&plotId=${props.plotId}&climate=${props.climate}`
              })


        } else {
            setPlantAdded("default");
            await fetch(backendIpAdress+'/plants/deletePlant', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `plantId=${props.plantId}&token=${props.token}&plotId=${props.plotId}&climate=${props.climate}`
              })
        }}


return (
        <View style={{
            marginHorizontal: 16,
            }}>
        <View  style={{
                borderRadius:16,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical:8,
                
        }} > 
            

                <Image
                style={{ 
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                    borderRadius: 16,
                }}
                source={{uri: props.Img}}
                />
        
                <View style={{flex:1}}>
                    <Text style={styles.Titre}>{props.CellTitle}</Text>
                </View>

                <MaterialCommunityIcons name={plantAdded === "default" ? "checkbox-blank-outline" : "checkbox-marked"} size={24} color={plantAdded === "default" ? "#1D6880" : "#1D6880"}  onPress={ () => [checkClick(), /* handlePressAddPlant(), handlePressDeletePlant() */ ]  }/>

                </View>
                <View style={{backgroundColor: "#A8ADAA", height: 1}}></View>
        </View>
        
  );}


const styles = StyleSheet.create({
    pressable :{
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 16,
        lineHeight: 22,
        color: '#2A2C2B',
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
    
    },Illustration: {
        width: 80,
        height: 80,
        marginRight: 16,
        resizeMode: 'cover',
    }
    }
    );