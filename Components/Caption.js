import React from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { CustomStyle } from "../CustomStyle";


export default function Caption(props) {

  return (
    
        <View  style={
            {
                flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
            }
        } > 
        <Image style={
            {height: 24,
                width: 24,
                margin: 8,
                overflow: 'visible',
                resizeMode: "cover",}
        } source={require('../assets/icones/g1/icones20.png' )}/>
        <Text style={styles.body}>{props.errorDetails}</Text>
        </View>
  );
}


