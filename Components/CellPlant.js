import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import backendIpAdress from '../parameters/param.js'


export default function CellPlant(props) {


    //conditions pour appliquer le toggle des checkbox
    const [plantAdded, setPlantAdded] = useState("default");
    const [checkColor, setcheckColor] = useState("#A8ADAA");
    const [checkIcon, setCheckIcon] = useState("checkbox-blank-outline");


    

    //Mise en place des settings front du toggle
    var checkClick = ()=> {

        console.log("checkColor",checkColor);
        console.log("plantAdded",plantAdded);
        
        if(plantAdded === "active"){setPlantAdded("default")} else {setPlantAdded("active")}

        
        if(plantAdded === "default") {
            setcheckColor("#A8ADAA");
            setCheckIcon("checkbox-blank-outline")
        } else {
            setcheckColor("#1D6880");
            setCheckIcon("checkbox-marked")}}


        var handlePressAddPlant = async ()=>{
            if(plantAdded === "default"){
                console.log("handlePressAddPlant")
                console.log("props.plantId", props.plantId);
                await fetch(backendIpAdress+'/plants/addPlant', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: `plantId=${props.plantId}`
                  })

            } 
          }
          
          var handlePressDeletePlant = ()=>{
            if(plantAdded === "active"){console.log("handlePressDeletePlant");} 
          }


return (
        <View style={{
            marginHorizontal: 16,
            paddingVertical:8}}>
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
                
                }}
                source={{uri: props.Img}}
                />
        
                <View style={{flex:1}}>
                    <Text style={styles.Titre}>{props.CellTitle}</Text>
                </View>

                <MaterialCommunityIcons name={checkIcon} size={24} color={checkColor}  onPress={ () => [checkClick(), handlePressAddPlant(), handlePressDeletePlant() ]  }/>
            
                </View>
                <View style={{backgroundColor: "#A8ADAA", height: 1}}></View>
        </View>
        
  );
}

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
        fontSize: 20,
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