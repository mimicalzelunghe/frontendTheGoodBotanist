import React from "react";
import { StyleSheet, Text, View, Pressable , Image} from 'react-native';


export default function CardSurvey(props) {


   

  return (
    
        <View  style={{
                backgroundColor: props.backgroundColor, 
                borderRadius:16,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:8,
                marginHorizontal: 16,
                paddingHorizontal:16,
                paddingVertical:16
        }} > 
        
            <Pressable style={styles.pressable}>

                <Image
                style={{ 
                    width: 80,
                    height: 80,
                    marginRight: 16,
                    resizeMode: 'cover',
                
                }}
                source={require('../assets/illustrations/expositionNo.png')}
                />
        
                <View>
                    <Text style={styles.Titre}>{props.CardTitle}</Text>
                    <Text style={styles.Description}>{props.CardDescription}</Text>
                </View>
            
            </Pressable>
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