import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Right from "react-native-vector-icons/AntDesign";
import { CheckBox } from "react-native-elements";

const CardPrepare = ({
  quiz,
  noOfQuestion,
  topicName,
  checked,
  navigation,
}) => {
  return (
    <View style={styles.wholeCard}>
      <Image
        source={require("../../assets/notification.png")}
        style={styles.imgStyle}
      />
      <View style={styles.textStyle}>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 20,
          }}
        >
          {quiz}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>{topicName}</Text>
        <View style={{ width: "80%" }}>
          <Right.Button
            name="rightcircle"
            size={20}
            backgroundColor="#620bee"
            borderRadius={20}
            color="white"
            onPress={() => navigation.navigate("Quiz")}
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-evenly",
              width: "100%",
              alignSelf: "center",
            }}
          >
            <Text style={styles.t}>Begin</Text>
          </Right.Button>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "400", fontSize: 20 }}>{noOfQuestion}</Text>
        <CheckBox
          size={20}
          checkedColor="#620bee"
          center
          iconRight
          containerStyle={{ marginTop: 25 }}
          checked={checked}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeCard: {
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 8,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignSelf: "center",
    width: "85%",
    height: "80%",
    marginVertical: 10,
    marginHorizontal: 20,
    flex: 1,
    elevation:5
  },
  textStyle: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "center",

    height: "100%",
    width:130
  },
  imgStyle: {
    height: "80%",
width:120,
    flex: 3,
 
  
    resizeMode: "contain",
    alignSelf: "flex-start",
    borderRadius: 30,
    alignSelf: "center",
  },
  t: {
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    color: "white",
  },
});
export default CardPrepare;
