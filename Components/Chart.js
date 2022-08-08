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
           ["cat", "dog", "bird", "dog", "frog", "fish"].map((d, i) => {
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
          style={{ data: { fill: "#FFA34E", width: 25 } }}
          data={[
            { x: "cat", y: 10 },
            { x: "dog", y: 25 },
            { x: "bird", y: 40 },
            { x: "frog", y: 50 },
            { x: "fish", y: 50 }
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