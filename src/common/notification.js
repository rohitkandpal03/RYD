import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
const Notifi = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",

        marginTop: 15,
        paddingRight: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "19%",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderWidth: 2,
          marginRight: 20,
         
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Live
        </Text>
        <Text style={{ color: "red", fontSize: 16 }}>{"\u2B24"}</Text>
      </View>

      <Icon name="notifications-sharp" size={35} color="white" />
    </View>
  );
};

export default Notifi;
