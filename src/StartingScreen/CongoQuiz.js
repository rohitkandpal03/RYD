import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  BackHandler,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const CongoQuiz = (props) => {
  const [name, setName] = useState('Rohit');
  const [points, setPoints] = useState(80);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> Congrats {name} !!</Text>
        <Text style={{fontSize: 20, color: 'white', marginTop: '3%'}}>
          You scored :
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            fontWeight: '700',
            marginTop: '3%',
          }}>
          {points} points
        </Text>
        <Button
          title={'Check leaderboard'}
          titleStyle={{color: '#292059', fontSize: 18, fontWeight: 'bold'}}
          buttonStyle={{backgroundColor: 'white'}}
          containerStyle={{width: '90%', height: '20%', marginTop: '8%'}}
        />
        <Button
          title={'New quiz'}
          titleStyle={{fontWeight: 'bold', fontSize: 18}}
          containerStyle={{width: '90%', height: '20%', marginTop: '2%'}}
        />
      </View>
    </SafeAreaView>
  );
};

// const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292059',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '40%',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CongoQuiz;
