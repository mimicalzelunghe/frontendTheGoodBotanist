import React from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { CustomStyle } from "../CustomStyle";


export default function Caption(props) {

  return (
    
        <View  style={styles.flexRowInputContainer} > 
        <Image style={styles.icone} source={require('../assets/icones/g1/icones20.png' )}/>
        <Text style={styles.body}>{props.errorDetails}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16,

    },
    icone: {
        height: 24,
        width: 24,
        margin: 8,
        overflow: 'visible',
        resizeMode: "cover",
    }, 
    flexRowInputContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,

        gap: 8,
    
    }, 
        body : {
            fontSize: 16,
            lineHeight: 18,
            color: "#6A6E6C",
        }
    
    }
    );
