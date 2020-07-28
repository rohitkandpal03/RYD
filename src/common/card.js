import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = ({
  first,
  second,
  third,
  icon,
  color,
  percent,
  show,
  height,
  rechargeAmount,
}) => {
  const colorStyles = {
    backgroundColor: color,
    height: height,
  };
  return (
    <View style={styles.cardView}>
      <Text style={styles.textStyle}>{first}</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white', fontSize: 13, alignSelf: 'center' }}>
          {second}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  cardView: {
    marginVertical:19,
   
    width: 70,
    height: 70,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  textStyle: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#292059',
    width: 50,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: -38,
  },
});
export default Card;
