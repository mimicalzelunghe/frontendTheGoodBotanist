import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPolarAxis } from "victory-native";


export default class Chart extends React.Component {
  render() {
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
            { x: "Attire la bio-diversité", y: 10 },
            { x: "Exposition au soleil", y: 25 },
            { x: "Adequation avec le sol", y: 40 },
            { x: "Survie sans eau", y: 50 },
            { x: "Résistance au froid", y: 50 },
            { x: "Acclimatation", y: 50 }
          ]}
        />
      </VictoryChart>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});