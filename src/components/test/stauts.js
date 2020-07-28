import React from 'react';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {View, StyleSheet, Text} from 'react-native';
import Timer from './timer';

const Status = ({no}) => {
  return (
    <View style={styles.head}>
      <View style={styles.stausBar}>
        <Text style={styles.text}> {no} / 20 Questions</Text>
        <ProgressBar
          styleAttr="Horizontal"
          indeterminate={false}
          progress={no/10}
          color="#292059"
          style={{transform: [{scaleX: 1.0}, {scaleY: 3.2}]}}
        />
      </View>
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    borderColor: 'black',
    backgroundColor: '#A0A1CA',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stausBar: {
    width: 180,
    height: 60,

    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#292059',
  },
});

export default Status;
