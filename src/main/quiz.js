import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Status from '../components/test/stauts';
import Header from '../common/header'
import Button from '../common/button';
import Question from '../components/test/question';
import Bubble from '../components/test/numstatus';
import { LinearGradient } from "expo-linear-gradient";

const Quiz = () => {
  const [questions, setquestion] = useState([
    {
      id: 1,
      ques:
        'India is a federal union comprising twenty-nine states and how many union territories?',
      option: ['me', 'you', 'us', 'they'],
    },
    {
      id: 2,
      ques:
        ' India is a federal union comprising twenty-nine states and how many union territories?',
      option: ['me', 'you', 'us', 'they'],
    },
    {id: 3, ques: 'who are We?', option: ['me', 'you', 'us', 'they']},
    {
      id: 4,
      ques:
        ' India is a federal union comprising twenty-nine states and how many union territories?',
      option: ['me', 'you', 'us', 'they'],
    },
    {id: 5, ques: 'who5?', option: ['me', 'you', 'us', 'they']},
    {id: 6, ques: 'who6?', option: ['me', 'you', 'us', 'they']},
    {id: 7, ques: 'who7?', option: ['me', 'you', 'us', 'they']},
    {id: 8, ques: 'who?8', option: ['me', 'you', 'us', 'they']},
    {id: 9, ques: 'who?9', option: ['me', 'you', 'us', 'they']},
    {id: 10, ques: 'who?01', option: ['me', 'you', 'us', 'they']},
  ]);
  const [currentQuesNo, setcurrentQues] = useState(0);
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
       <LinearGradient
        colors={["#292059", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      
      <Status no={currentQuesNo + 1} />
      <Bubble nu={questions} />
      <Question question={questions[currentQuesNo]} />
      <View style={styles.btnStyle}>
        <Button
          btn={'Previous >'}
          press={() => setcurrentQues(currentQuesNo - 1)}
        />
       
        <Button
          btn={'Next >'}
          press={() => setcurrentQues(currentQuesNo + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Quiz;
