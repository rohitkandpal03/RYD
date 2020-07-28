import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CardPrepare from "./cardPrepare";
const Prepaer = ({ navigation }) => {
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
    <View style={styles.contain}>
      <Text style={{ fontWeight: "800", fontSize: 20, marginLeft: 20 }}>
        Free Test
      </Text>

      <View style={{ height: "50%", alignSelf: "center" }}>
        <FlatList
          data={Data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.subject}
          renderItem={({ item }) => (
            <CardPrepare
              quiz={item.mode}
              noOfQuestion={item.noQues}
              topicName={item.subject}
              checked={item.checked}
              navigation={navigation}
            />
          )}
        />
      </View>
      <Text style={{ fontWeight: "800", fontSize: 20, marginLeft: 20 ,  }}>
        Live Test
      </Text>

      <View style={{ height: "50%", alignSelf: "center" , marginVertical:10}}>
        <FlatList
          data={Data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.subject}
          renderItem={({ item }) => (
            <CardPrepare
              quiz={item.mode}
              noOfQuestion={item.noQues}
              topicName={item.subject}
              checked={item.checked}
              navigation={navigation}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contain: {
    height: "90%",
  
  },
});
export default Prepaer;
