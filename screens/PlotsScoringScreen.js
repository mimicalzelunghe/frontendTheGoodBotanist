import React, {useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import Chart from '../Components/Chart';
import Navbar from '../Components/Navbar';

import {connect} from 'react-redux';

import backendIpAddress from '../parameters/param.js'


function PlotsScoringScreen(props){

  const [plotData, setPlotData] = useState([])

  const [plotScores, setPlotScores] = useState([])
  const [plotPlantsNumber, setPlotPlantsNumber] = useState(0)
  const isMounted = useRef(false);


  useEffect(()=>{

    var uploadPlot = async ()=>{
    
          //route 13: brings back th plot data without the plants populate 
          const rawPlotData = await fetch(backendIpAddress+'/plots/uploadPlot', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `plotId=${props.store.plotId}`
          })

          //retranscription de la réponse pour qu'on puisse la lire
          const plotData = await rawPlotData.json()
          console.log("🚀 ~ file: PlotsScoringScreen.js ~ line 36 ~ uploadPlot ~ plotData", plotData)

          setPlotScores(plotData.scoring)
          setPlotPlantsNumber(plotData.groundedPlants.length)
          setPlotData(plotData)

    }

    uploadPlot();


  }, [])//end initialization UseEffect 



  
  function onPressRightIcon(){console.log("onPressRightIcon");}
  function onPressLeftIcon(){props.navigation.navigate("Home")}

    return(
      <View style={styles.container}>
        
        <View style={{width: "100%"}}>
        <Navbar 
        iconNameLeft="arrow-left" 
        iconNameRight="close" 
        iconColorLeft="#1D6880" 
        iconColorRight="#FFFFFF"  
        navigationText='' 
        redirectionIconeLeft="../screens/HomeScreen.js" 
        onPressLeftIcon={onPressLeftIcon} 
        // onPressRightIcon={onPressRightIcon}
        />
        </View>
       


        
      <Text style={{fontSize: 35,
      lineHeight: 40,
      color: "#2A2C2B",
      marginHorizontal: 16,
      textAlign: 'center',
      marginTop: 16,
      fontFamily: 'BreeSerif'
      }}>
        Le potager</Text>

      
      
      <View style={{
        
        flexDirection: "column",
        alignItems: "center",
        padding: 8,
        borderWidth: 2,
       borderColor: "#1D6880",
       margin: 24,
       borderRadius: 8
      }}>
      <Text style={{
        fontSize: 16,
        lineHeight: 22,
        color: "#1D6880",
        fontFamily: 'BreeSerif'
      }}>
      BIO-SCORE</Text>
      <Text style={{
         fontSize: 35,
         lineHeight: 40,
         color: "#1D6880",
         fontFamily: 'BreeSerif'
      }}>
      67</Text>
      </View>
      
      <Chart style={{width: 100}} score={[10,10,10,10,10,10]}/>

    </View>
    )
}//end PlotsScoringScreen

  
// update the variable into the Redux store
function mapStateToProps(state) {
console.log("🚀 ~ file: PlotsScoringScreen.js ~ line 114 ~ mapStateToProps ~ state", state)

  return { store: state }
 }
 
export default connect(
  mapStateToProps, 
  null
)(PlotsScoringScreen);


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFF"
        
    }
})