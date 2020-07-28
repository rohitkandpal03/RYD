import React from "react";
import { StackedBarChart } from "react-native-svg-charts";
import { View } from "react-native";

const Bar = () => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
      oranges: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  const colors = ["#292059"];
  const keys = ["apples", "bananas", "cherries", "dates"];

  return (
    <View style={{height:300 , width:"80%" , alignSelf:'center'}}>
      <StackedBarChart
        style={{ height: 200 }}
        keys={keys}
        colors={colors}
        data={data}
        showGrid={false}
        horizontal
        contentInset={{ top: 30, bottom: 30 }}
      />
    </View>
  );
};

export default Bar;
