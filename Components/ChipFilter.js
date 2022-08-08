import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import backendIpAdress from '../parameters/param.js'


export default function ChipFilter(props) {
    console.log("Coucou");



    //conditions pour appliquer le toggle des checkbox
    const [filterActivation, setFilterActivation] = useState("default");
    // const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [borderColor, setBorderColor] = useState("#A8ADAA");
    const [textColor, setTextColor] = useState("#2A2C2B");




    //Mise en place des settings front du toggle
    var filterClick = ()=> {
        console.log("filterClick");

        
        // if(filterActivation === "default"){setFilterActivation("active")} else {setFilterActivation("default")}

        
        if(filterActivation === "default") {
            setBorderColor("#A8ADAA");
            setTextColor("#2A2C2B")
            setFilterActivation("active")

        } else {
            setBorderColor("#FFFFFF");
            setTextColor("#FFFFFF");
            setFilterActivation("default")    
        }}


    //     var handlePressAddPlant = async ()=>{
    //         if(plantAdded === "default"){
    //             console.log("handlePressAddPlant")
    //             console.log("props.plantId", props.plantId);
    //             console.log("props.token", props.token);

    //             await fetch(backendIpAdress+'/plants/addPlant', {
    //                 method: 'POST',
    //                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //                 body: `plantId=${props.plantId}&token=${props.token}&plotId=${props.plotId}`
    //               })

    //         } 
    //       }
          
    //       var handlePressDeletePlant = async ()=>{
    //         if(plantAdded === "active"){
                
    //             console.log("handlePressDeletePlant");
    //             await fetch(backendIpAdress+'/plants/deletePlant', {
    //                 method: 'POST',
    //                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //                 body: `plantId=${props.plantId}&token=${props.token}&plotId=${props.plotId}`
    //               })
            
            
    //         } 
    //       }


return (
        <Pressable style={{backgroundColor:filterActivation === "default" ? "#FFF" : "#1D6880", borderRadius: 24, borderColor:filterActivation === "default" ? "#A8ADAA" : "#FFFFFF", borderWidth: 1 , paddingHorizontal: 16, paddingVertical: 8, marginHorizontal:4}} 
        onPress={ () => filterClick() }>
                <View style={{flexDirection: "row"}}>
                <Text style={{fontSize: 16,lineHeight: 22, color:filterActivation === "default" ? "#2A2C2B" : "#FFFFFF"}}>{props.filterLabel}</Text>
                </View>
        </Pressable>
  );
}

