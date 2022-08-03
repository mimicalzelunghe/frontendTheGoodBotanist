import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";



export default function ButtonPrimary(props) {

    console.log("propoijoijoi",props);

  return (
    
        <View  style={styles.container} > 
        <Pressable style={styles.pressable}>
        <MaterialCommunityIcons name={props.iconName} size={30} color={props.iconColor}  />

        <Text style={styles.bodyMD}>{props.buttonLabel}</Text>
        </Pressable>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1D6880',
      borderRadius:16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      height: 56,
      marginVertical:4,
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
        fontSize: 20,
        lineHeight: 22,
        color: '#FCFFFD',
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