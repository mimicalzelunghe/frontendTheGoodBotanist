import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";



export default function Navbar(props) {

  return (
    
        <View  style={styles.container} > 
        <Image
                style={{ 
                    width: 32,
                    height: 32,
                    marginRight: 16,
                    resizeMode: 'cover',
                }}
                source={require('../assets/icones/g1/icones18.png')}
                />
        
        <Text style={styles.bodyMD}>Hello</Text>
        <Image
                style={{ 
                    width: 40,
                    height: 40,
                    marginRight: 16,
                    resizeMode: 'cover',
                }}

                source={require('../assets/icones/g1/icones16.png')}
                />
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
        fontSize: 20,
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