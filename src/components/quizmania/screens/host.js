import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Button, Text, Searchbar, Snackbar} from 'react-native-paper';

import Loading from '../loading';

import io from 'socket.io-client';

const Host = (props) => {
  const [value, setValue] = useState('');

  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  //  useEffect(() => {
  //   if (value){
  //     console.log
  //   }

  // })

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={[
          value == itemData.item.id
            ? {...styles.card, borderColor: 'purple', borderWidth: 1}
            : {...styles.card},
        ]}
        onPress={() => {
          setVisible(false);
          setValue(itemData.item.id);
        }}>
        <Text style={{textAlign: 'center'}}>{itemData.item.subject}</Text>
      </TouchableOpacity>
    );
  };

  const categoryHandler = () => {
    console.log('inside categoryHandler');
    return (
      <View>
        <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {visible == true ? (
        <Text style={{marginTop: 5, color: 'red'}}>
          Please select some Category
        </Text>
      ) : (
        <Text></Text>
      )}
      <Searchbar placeholder="Search" style={styles.searchbar} />

      <Text style={styles.text}>Choose a Category to Host Game</Text>

      <View style={styles.sub}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={[
            {subject: 'History', id: '1'},
            {subject: 'geography', id: '2'},
            {subject: 'Hindi', id: '3'},
            {subject: 'IT', id: '4'},
            {subject: 'History', id: '5'},
            {subject: 'geography', id: '6'},
            {subject: 'Hindi', id: '7'},
            {subject: 'IT', id: '8'},
          ]}
          renderItem={renderGridItem}
        />
      </View>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => props.navigation.navigate('GameId')}>
        PLAY ONLINE
      </Button>

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          try {
            if (!value) {
              setVisible(true);
            } else {
              props.navigation.navigate('GameId');
            }
          } catch (e) {
            console.log('error in dashboard', e);
          }
        }}>
        PLAY WITH FRIENDS
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // backgroundColor:'red'
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    marginVertical: 10,
  },
  text: {
    color: 'black',
    width: '90%',
    textAlign: 'center',

    fontSize: 15,
  },
  searchbar: {
    marginTop: 15,
    marginBottom: 20,
  },
  sub: {
    height: '50%',
    //   backgroundColor:'white',
    marginVertical: 20,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderColor: 'black',
    borderRadius: 5,
    elevation: 10,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Host;
