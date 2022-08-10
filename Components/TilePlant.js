import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable , Image, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import backendIpAdress from '../parameters/param.js';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TilePlant(props) {


    const image = { uri: "https://media.gerbeaud.net/2015/03/640/tilleul.jpg" };

    var modalInfoPress = () =>{
        console.log("ModalePress")
        console.log("Plant", props.plantInfo )


        props.modalInfoPressParent(props.plantInfo)
        // props.modalInfoPressParent(props.plant.common_name, props.plant.attracts_birds, props.plant.attracts_butterflies, props.plant.pollinators, props.plant.cold_hardiness, props.plant.resistance_to_drought, props.plant.Infos_sol, props.climate, props.Description )
    };


    //conditions pour appliquer le toggle des checkbox
    const [plantLiked, setPlantLiked] = useState("default");
    const [likeColor, setLikeColor] = useState("#A8ADAA");
    const [likeIcon, setLikeIcon] = useState("cards-heart-outline");


    //Ajout des plantes liké dans le store
    const [favoriePlants, setFavoriePlants] = useState({plotId: props.store.plotId, plantsId: []});
    
    // AsyncStorage.setItem(props.store.plotId, JSON.stringify(props.plantInfo));
    //             AsyncStorage.getItem(props.store.plotId, function(error, data) {
    //                 console.log("data storage just added :",JSON.parse(data));
    //             });
    //Ajout des plantes likés dans le store

    //Mise en place des settings front du toggle
    var likeClick = ()=> {

        

        console.log("likeIcon",likeIcon);
        console.log("plantLiked",plantLiked);
        console.log("props.store",props.store);
        
        if(plantLiked === "active"){setPlantLiked("default")} else {setPlantLiked("active")}

        
        if(plantLiked === "default") {
            setLikeColor("#A8ADAA");
            setLikeIcon("cards-heart-outline")
        } else {
            setLikeColor("#1D6880");
            setLikeIcon("cards-heart")}}


        var handlePressAddPlant = async ()=>{
            if(plantLiked === "active"){

                var plantFavorite = [];

                plantFavorite.push(props.plantInfo);
                console.log("🚀 ~ file: TilePlant.js ~ line 57 ~ handlePressAddPlant ~ plantFavorite", plantFavorite)
            
            } 
          }
          
          var handlePressDeletePlant = async ()=>{
            if(plantLiked === "default"){
                
                var uploadedFavoritePlant = favoriePlants;
                
            } 
          }


return (
        <View style={{
            flex: 3,
            margin: 8,
            backgroundColor: "#F5F6EF",
            borderRadius: 16,
            minWidth: 100,
            borderWidth: 1,
            borderColor: "#A8ADAA",
            overflow: "hidden",
            paddingBottom: 8
            
        }}>
        <View  style={{
                borderRadius:16,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
        }}  > 
            
            <Pressable onPress={()=> modalInfoPress()} style={{width:"100%"}}>
            <ImageBackground source={image} resizeMode="cover" style={{
              height: 100,
              width: "100%",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }} />
            
        
                
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 22,
                        color: "#2A2C2B",
                        textAlign: "center",
                        marginBottom: 8,
                        paddingHorizontal:8 ,
                        
                    }}numberOfLines={2}>{props.labelTitle}</Text>
                </Pressable>
                    
                     <Text style={{
                        fontSize: 16,
                        lineHeight: 22,
                        color: "#1D6880",
                        textAlign: "center",
                        marginBottom: 8,
                        borderWidth: 1,
                        borderRadius: 4,
                        paddingHorizontal: 4,
                        borderColor: "#1D6880",
                        
                    }}>{props.score}score</Text>
            
                
                {/* <MaterialCommunityIcons name={likeIcon} size={24} color={likeColor}  onPress={ () => [likeClick(), handlePressAddPlant(), handlePressDeletePlant() ]  }/> */}
                </View>
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