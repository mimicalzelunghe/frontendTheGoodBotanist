import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CellPlant(props) {

    const [isSelected, setSelection] = useState(false);
    isSelected ? "👍" : "👎"

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
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View style={{flex:1}}>
                    <Text style={styles.Titre}>{props.CellTitle}</Text>
                </View>

                <MaterialCommunityIcons name={props.checkBoxState} size={24} color={props.checkboxColor}  />                
            
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