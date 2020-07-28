import React from 'react';
import {View, Text , StyleSheet} from 'react-native';
import Header from '../common/header';
import Cards from '../common/card';
const Coins = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#A0A1CA' , flex: 1}}>
     
    </View>
  );
};

const styles = StyleSheet.create({
  coinView:{
    marginTop:40,
    height:480,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:"center",
    
  }
})
export default Coins;
