import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import Card from '../common/card';
import Search from '../common/search';
import CardHome from '../components/home/cardHome';
import {LinearGradient} from 'expo-linear-gradient';
import Header from '../common/header';
import Notifi from '../common/notification';
import Bar from '../components/home/bar';
import FlashCard from '../StartingScreen/FlashCard';

const Home = ({navigation}) => {
  const [show, setshow] = useState(true);
  const showfun = () => {};

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  useEffect(() => {
    console.log('Mounted');
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#292059', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 600,
        }}
      />
      <Notifi />
      <Header head={'Hey Ajay'} />

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          height: '13%',
        }}>
        <Card first={'1550'} second={'Coins'} />
        <Card first={'Silver'} second={'Badges'} />

        <Card first={'159'} second={'Solved'} />
      </View>

      <Search navigation={navigation} />

      <View style={{height: '22%', marginVertical: 10}}>
        <View style={{justifyContent: 'center', marginLeft: 40}}>
          <Text style={{fontWeight: '800', fontSize: 20}}>
            Suggested Topics
          </Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: 10}}
          data={[
            {question: 'Math', noQues: '20', time: '20'},
            {question: 'Biology', noQues: '20', time: '20'},
            {question: 'Chemistry', noQues: '20', time: '20'},
            {question: 'Physics', noQues: '20', time: '20'},
          ]}
          keyExtractor={(item) => item.question}
          renderItem={({item}) => <CardHome item={item} />}
        />
      </View>

      <View style={{height: '22%', marginVertical: 10}}>
        <View style={{justifyContent: 'center', marginLeft: 40}}>
          <Text style={{fontWeight: '800', fontSize: 20}}>Flash Cards</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: 10}}
          data={[
            {question: 'Math', noQues: '20', time: '20'},
            {question: 'Biology', noQues: '20', time: '20'},
            {question: 'Chemistry', noQues: '20', time: '20'},
            {question: 'Physics', noQues: '20', time: '20'},
          ]}
          keyExtractor={(item) => item.question}
          renderItem={({item}) => <CardHome item={item} />}
        />
      </View>

      <View style={{}}>
        <View style={{justifyContent: 'center', marginLeft: 40}}>
          <Text style={{fontWeight: '800', fontSize: 20}}>Your AI Report</Text>
        </View>
        <Bar />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: 'white',
    height: '100%',
  },
});
export default Home;
