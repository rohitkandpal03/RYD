import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Search from "../common/search";
import Buttongroup from "../components/prepare/buttonGroup";
import CardPrepare from "../components/prepare/cardPrepare";
import { LinearGradient } from "expo-linear-gradient";
import Sort from "../components/prepare/sort";
import Prepaer from "../components/prepare/compete";

const Practice = ({ navigation }) => {
  const [selected, setselected] = useState(0);
  const Data = [
    {
      mode: "Practice",
      subject: "Math",
      checked: true,
      noQues: "20",
    },
    {
      mode: "Practice",
      subject: "Biology",
      checked: false,
      noQues: "20",
    },
    {
      mode: "Practice",
      subject: "History",
      checked: true,
      noQues: "20",
    },
    {
      mode: "Practice",
      subject: "Chemistry",
      checked: false,
      noQues: "20",
    },
    {
      mode: "Practice",
      subject: "Physics",
      checked: false,
      noQues: "20",
    },
  ];

  return (
    <View style={styles.design}>
      <LinearGradient
        colors={["#292059", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 600,
        }}
      />

      <Search navigation = {navigation}/>
      <Buttongroup select={(select) => setselected(select)} before={selected} />
      <Sort />
      <View style={{flex:1 }}>
        {selected === 0 ? (
          <FlatList
            data={Data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.subject}
            renderItem={({ item }) => (
              <View>
                <CardPrepare
                  quiz={item.mode}
                  noOfQuestion={item.noQues}
                  topicName={item.subject}
                  checked={item.checked}
                  navigation={navigation}
                />
              </View>
            )}
          />
        ) : (
          <View>
            <Prepaer />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "white",
  },
  btn: {
    flexDirection: "row",

    width: 300,
    height: 40,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 50,
  },
});
export default Practice;
