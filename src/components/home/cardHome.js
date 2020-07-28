import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CardHome = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.wholeCard}>
        <Image
          source={require("../../assets/notification.png")}
          style={styles.image}
        />
        <View style={styles.textStyle}>
          <Text
            style={{
              fontSize: 25,
              color: "#292059",
              marginLeft: 10,
              fontWeight: "600",
            }}
          >
            {item.question}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "300", opacity: 0.5 }}>
              {" "}
              {item.noQues} Question{" "}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "300", opacity: 0.5 }}>
              {item.time} min
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wholeCard: {
    width: 200,
    height: 190,
    borderRadius: 20,
    elevation: 3,
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: 10,

    marginTop: 20,
  },
  textStyle: {
    flex: 2,
    borderRadius: 20,
    justifyContent: "space-evenly",
  },
  image: {
    borderRadius: 20,

    resizeMode: "cover",
    flex: 3,
  },
  textSize: {
    fontSize: 18,
  },
});
export default CardHome;
