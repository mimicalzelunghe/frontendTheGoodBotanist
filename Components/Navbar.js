import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";



export default function Navbar(props) {

  return (
    
        <View  style={styles.container} > 
        <MaterialCommunityIcons style={{margin:8}} name={props.iconNameLeft} size={30} color={props.iconColorLeft} />
        
        <Text style={styles.bodyMD}>{props.navigationText}</Text>
        <MaterialCommunityIcons style={{margin:8}} name={props.iconNameRight} size={30} color={props.iconColorRight} />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      height: 56,
    },
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
    bodyMD: {
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
    
    }
    }
    );