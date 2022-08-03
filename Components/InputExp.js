import React from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function InputExp(value, label, name, placeholder, type, onChange) {

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChangeText={onChange}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      marginVertical: 8,
      marginHorizontal: 16,

    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#F5F6EF',
        borderRadius:16,
        borderWidth:  2,
        borderColor:  '#A8ADAA',
        fontSize: 20,
        lineHeight: 22,
        color: "#2A2C2B",
        height: 54, 

    }, icone: {
        height: 24,
        width: 24,
        margin: 8,
        overflow: 'visible',
        resizeMode: "cover",
}}
    );



