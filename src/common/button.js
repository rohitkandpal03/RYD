import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({btn , press}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress ={press}>
        <Text style={styles.text}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: 'black',
    width: 120,
    height: 40,
    backgroundColor: '#292059',
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius:10
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Button;
