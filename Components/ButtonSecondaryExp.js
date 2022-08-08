import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";



const ButtonSecondaryExp = ({iconName,iconColor, onPress, buttonLabel}) =>{


  return (
    
        <View  style={styles.container} > 
        <Pressable style={styles.pressable} onPress={onPress}>
        <MaterialCommunityIcons name={iconName} size={30} color={iconColor}  />

        <Text style={styles.bodyMD}>{buttonLabel}</Text>
        </Pressable>
        </View>
  );
}
export default ButtonSecondaryExp;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderWidth:  1,
        borderColor:  '#1D6880',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        height: 48,
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
        fontSize: 16,
        lineHeight: 22,
        color: '#1D6880',
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