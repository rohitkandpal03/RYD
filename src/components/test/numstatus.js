import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Bubble = ({nu}) => {
  const Data = nu;
  return (
    <FlatList
      data={Data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={styles.circle}>
          <Text style={styles.num}>{item.id}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 40,
    width: 35,
    height: 35,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A0A1CA',
    marginVertical: 15,

    marginLeft: 20,
  },
  num: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Bubble;
