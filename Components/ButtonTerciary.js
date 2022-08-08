import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';


export default function ButtonTerciary(props) {

  return (
    
        <View  style={styles.container} > 
        <Pressable style={styles.pressable}>
        {/* <Image style={styles.icone} source={props.iconPath}/> */}
        <Text style={styles.bodyMD}>{props.buttonLabel}</Text>
        </Pressable>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      borderRadius:16,
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
        fontSize: 13,
        lineHeight: 15,
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