import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Option = ({opts, o}) => {
  return (
    <View style={{marginTop: 7}}>
      <TouchableOpacity style={styles.opt}>
        <Text style={styles.op}>{o} .</Text>
        <Text style={styles.text}> {opts}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  opt: {
    borderWidth: 0.5,
    marginTop: 20,
    height: 35,
    shadowColor: 'green',
    shadowOffset: {width: 20, height: 10},
    display: 'flex',
    flexDirection:"row",
    borderWidth:2,
    width:350,
    borderRadius:10
  },
  op: {
    fontWeight: '500',
    fontSize: 18,
    color: '#292059',
    fontWeight:'bold',
    marginLeft:10
  },
  text:{
    fontWeight: '500',
    fontSize: 18,
    color: '#292059',
    fontWeight:'400',
    marginLeft:20,

  }
});

export default Option;
