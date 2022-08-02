import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';


export default function ButtonSecondary(props) {

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
        backgroundColor: '#FFFFFF',
      borderWidth:  2,
      borderColor:  '#1D6880',
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