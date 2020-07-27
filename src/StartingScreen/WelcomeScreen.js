import React, {useEffect} from 'react';
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
import OnBoardingScreen from './OnBoardingScreen';

const WelcomeScreen = (props) => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <OnBoardingScreen />
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text, {color: '#292059'}]}>Welcome</Text>
        <Text
          style={{
            marginTop: '3%',
            fontWeight: '700',
            fontSize: 16,
            color: '#292059',
            marginBottom: '15%',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <TouchableOpacity
          onPress={() => {
            return props.navigation.replace('LoginScreen');
          }}
          style={{alignSelf: 'center'}}>
          <Button
            title="Get Started"
            buttonStyle={{borderRadius: 20, backgroundColor: '#292059'}}
            containerStyle={{width: 150, height: 60}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  footer: {
    flex: 1,
    backgroundColor: '#dadae7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    marginTop: '-7%',
    zIndex: 1000,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292059',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
});
export default WelcomeScreen;
