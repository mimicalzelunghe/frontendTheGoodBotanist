import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPolarAxis } from "victory-native";


export default function Chart (props) {

  const rawScore = props.score
  console.log("🚀 ~ file: Chart.js ~ line 11 ~ Chart ~ render ~ rawScore", rawScore)


//30 10 20 10 10 10
  var biodiversityAttractiveness = rawScore[0]*50/30;
  var sunshine = rawScore[1]*50/10;
  var soilAdequation = rawScore[2]*50/20;
  var resistanceToDrought = rawScore[3]*50/10;
  var coldHardiness = rawScore[4]*50/10;
  var climateAdequation = rawScore[5]*50/10;

    return (
        <VictoryChart polar
        theme={VictoryTheme.material}
      >
        {
           ["Attire la bio-diversité", "Exposition au soleil", "Adequation avec le sol", "Survie sans eau","Résistance au froid", "Acclimatation"].map((d, i) => {
            return (
              <VictoryPolarAxis dependentAxis
                key={i}
                label={d}
                labelPlacement="perpendicular"
                style={{ tickLabels: { fill: "none" } }}
                axisValue={d}
              />
            );
          })
        }
        <VictoryBar
          style={{ data: { fill: "#FFA34E", width: 50 } }}
          data={[
            { x: "Attire la bio-diversité", y: biodiversityAttractiveness },//{this.props.name}
            { x: "Exposition au soleil", y: sunshine },
            { x: "Adequation avec le sol", y: soilAdequation },
            { x: "Survie sans eau", y: resistanceToDrought },
            { x: "Résistance au froid", y: coldHardiness },
            { x: "Acclimatation", y: climateAdequation }
          ]}
        />
      </VictoryChart>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});