import { StyleSheet } from 'react-native';

var   g1 = "#2A2C2B";
var   g2 = "#6A6E6C";
var   g3 = "#A8ADAA";
var   g4 = "#E2E7E4";
var   g5 = "#F5F6EF";
var   g6 = "#FBFBFA";
var   textMajorColor = "#2A2C2B";
var   textMinorColor = "#6A6E6C";
var   textDisabledColor = "#A8ADAA";
var   textInvertedColor = "#FCFFFD";
var   primaryColor = "#1D6880";
var    secondaryColor = "#FFA34E";
var    terciaryColor = "#CFF1D5";
var    errorColor = "#E91B06";
var    warningColor = "#FA5C00";
var    successColor = "#26925E";
var    additional1Color = "#F1DFDE";
var    additional2Color = "#E6DFF1";
var    additional3Color = "#C0DEDD";
var    additional4Color = "#F2EEE9";

const CustomStyle = StyleSheet.create({
    
//Typography 
    titleXL: {
        fontSize: 35,
        lineHeight: 40,
        color: "#2A2C2B",
    }, 
    titleLG: {
        fontSize: 26,
        lineHeight: 34,
        color: "#2A2C2B",
    },
    titleXS: {
        fontSize: 19,
        lineHeight: 24,
        color: "#2A2C2B",
    },
    bodyMd: {
        fontSize: 16,
        lineHeight: 22,
        color: "#2A2C2B",
    },bodyMdBold: {
            fontSize: 16,
            lineHeight: 22,
            color: "#2A2C2B",
    }
    ,bodySM: {
            fontSize: 13,
            lineHeight: 15,
            color: "#2A2C2B",
    }
    ,bodySMBold: {
            fontSize: 13,
            lineHeight: 15,
            color: "#2A2C2B",
    }, 
    bodyXSBold: {
            fontSize: 11,
            lineHeight: 13,
            color: "#2A2C2B",
    },
    //Font colors
    textMajorColor: {
        color: '#2A2C2B',
    }, 
    textMinorColor: {
        color: '#6A6E6C',
    }, 
    textDisabledColor: {
        color: '#disabled',
    }, 
    textInvertedColor: {
        color: '#FCFFFD',
    }, 
    //background color
    g1: {
        backgroundColor: '#2A2C2B',
    }, 
    g2: {
        backgroundColor: '#6A6E6C',
    }, 
    g3: {
        backgroundColor: '#A8ADAA',
    }, 
    g4: {
        backgroundColor: '#E2E7E4',
    }, 
    g5: {
        backgroundColor: '#F5F6EF',
    }, 
    primaryColor: {
        backgroundColor: '#1D6880',
    }, 
    secondaryColor: {
        backgroundColor: '#FFA34E',
    }, 
    tertiaryColor: {
        backgroundColor: '#CFF1D5',
    }, 
    errorColor: {
        backgroundColor: '#E91B06',
    }, 
    warningColor: {
        backgroundColor: '#FA5C00',
    }, 
    successColor: {
        backgroundColor: '#26925E',
    }, 
    additional1Color: {
        backgroundColor: '#F1DFDE',
    },
    additional2Color: {
        backgroundColor: '#E6DFF1',
    }, 
    additional3Color: {
        backgroundColor: '#C0DEDD',
    }, 
    additional4Color: {
        backgroundColor: '#F2EEE9',
    }, 
    //border stroke
    borderPrimary: {
        borderWidth:  1,
        borderColor:  '#1D6880',
    }, 
    borderGrey: {
        borderWidth:  1,
        borderColor:  '#A8ADAA',
    }, 
    //border radius
    borderRadiusMD: {
        borderRadius:16,
    },
    borderRadiusXL: {
        borderRadius:40,
    }, input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#F5F6EF',
        borderRadius:16,
        borderWidth:  1,
        borderColor:  '#A8ADAA',
        fontSize: 16,
        lineHeight: 22,
        color: "#2A2C2B",
        height: 54, 
    }, 
    icone: {
        height: 24,
        width: 24,
        margin: 8,
        overflow: 'visible',
        resizeMode: "cover",
    }, 
    //layout
    flexRowInputContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        gap: 8,
    
    }

    });

    export { CustomStyle }









// .chipFilter {
//     height: 80;
//     paddingHorizontal: 16;
//     border-width: 1;
//     border-radius: 40;
//     border-color: var(--g3-) ;
//     padding-top: 11;
//     padding-bottom: 11;
//     font-size: 13;
//     line-height: 18;
//   }