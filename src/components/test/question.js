import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Option from './option';

const Question = ({question}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.quesNo}>Question {question.id}</Text>
      <Text style={styles.questionStyle}>{question.ques}</Text>
      <Option opts={question.option[0]} o = {"A"} />
      <Option opts={question.option[1]} o = {"B"} />
      <Option opts={question.option[2]} o = {"C"}/>
      <Option opts={question.option[3]} o = {"D"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  quesNo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#292059',
  },
  container: {
    marginLeft: 20,
    justifyContent: 'flex-start',
    height: 400,
    
  },
  questionStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#292059',
    marginTop: 10
    
  },
});

export default Question;
