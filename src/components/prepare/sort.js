import React, { useState } from "react";

import { Picker } from "@react-native-community/picker";

import { Text, View, StyleSheet } from "react-native";

const Sort = () => {
  const [country, setcountry] = useState("Popular");
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight: "800", fontSize: 18 }}>
        Sort By :{" "}
      </Text>

      <Picker
        selectedValue={country}
        onValueChange={(itemValue, itemIndex) => setcountry(itemValue)}
        style={{
          height: "100%",
          width: "25%",
          color: "white",
          paddingStart:20
        

        }}
        mode={"dropdown"}
      >
        <Picker.Item label="Popularity" value="java" />
        <Picker.Item label="Date" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical:10
  },
});

export default Sort;
