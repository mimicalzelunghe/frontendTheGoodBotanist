import React from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { CustomStyle } from "../CustomStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";



export default function Caption(props) {

  return (
    
        <View  style={
            {
                flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 16,
        marginHorizontal: 16,
            }
        } > 
        <MaterialCommunityIcons style={{margin: 8}} name={props.iconName} size={24} color={props.iconColor} />

        <Text style={{
            fontSize: 16,
            lineHeight: 22,
            color: props.textColor,
        }
}>{props.errorDetails}</Text>
        </View>
  );
}


