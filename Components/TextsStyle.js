import React from "react";
import { Text, View,  } from 'react-native';
import { CustomStyle } from "../CustomStyle";


export default function TextsStyle() {


  return (
    <View >
        <Text style={CustomStyle.titleXL}>titleXL</Text>
        <Text style={CustomStyle.titleLG}>titleLG</Text>
        <Text style={CustomStyle.titleXS}>titleXS</Text>
        <Text style={CustomStyle.bodyMD}>bodyMD</Text>
        <Text style={CustomStyle.bodyMdBold}>bodyMdBold</Text>
        <Text style={CustomStyle.bodySM}>bodySM</Text>
        <Text style={CustomStyle.bodySMBold}>bodySMBold</Text>
        <Text style={CustomStyle.bodyXSBold}>bodyXSBold</Text>

    </View>
  );
}

