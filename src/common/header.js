import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const Header = ({navigation, head}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.textStyle}>{head}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "4%",
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: '700',
    fontStyle: 'italic',
    flex: 6,
    alignSelf: 'flex-end',
    paddingLeft:50 ,
    color:'white'   
  },
  icon: {
    alignSelf: 'flex-start',
    marginTop: 20,
    flex: 1,
  },
});

export default Header;
