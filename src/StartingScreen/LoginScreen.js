import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import Register from './Register';
import Login from './Login';
import {useResponsiveWidth} from 'react-native-responsive-dimensions';

const LoginScreen = (props) => {
  const [signInColor, setSignInColor] = useState(true);
  const [RegisterColor, setRegisterColor] = useState(false);

  const RegisterTabHandler = () => {
    return (
      <>
        {setSignInColor(true)}
        {setRegisterColor(false)}
        <Register />
      </>
    );
  };

  const signInTabHandler = () => {
    return (
      <>
        {setSignInColor(false)}
        {setRegisterColor(true)}
        <Login />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {marginTop: '10%'}]}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            title={'Register'}
            type={'outline'}
            titleStyle={signInColor ? {color: 'black'} : {color: 'white'}}
            buttonStyle={[
              signInColor
                ? {backgroundColor: 'white'}
                : {backgroundColor: 'transparent'},
              {
                width: useResponsiveWidth(45),
                height: 50,
                borderColor: 'white',
              },
            ]}
            onPress={RegisterTabHandler}
          />
          <Button
            title={'Login'}
            type={'outline'}
            titleStyle={RegisterColor ? {color: 'black'} : {color: 'white'}}
            buttonStyle={[
              RegisterColor ? styles.registerColor : styles.register,
              {
                width: useResponsiveWidth(45),
                height: 50,
                borderColor: 'white',
              },
            ]}
            onPress={signInTabHandler}
          />
        </View>
        <Text style={{marginTop: 20, marginLeft: 20, fontWeight: '700'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
      </View>
      {signInColor ? (
        <Register val={props} isLogin={signInTabHandler} />
      ) : (
        <Login val={props} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0A1CA',
  },

  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'relative',
    paddingTop: '8%',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  registerColor: {
    backgroundColor: 'white',
  },
  register: {
    backgroundColor: 'transparent',
  },
  textInput: {
    height: 40,
    borderColor: '#F4F6FF',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 15,
    color: 'black',
    marginTop: '0.5%',
    backgroundColor: '#f4f4f4',
  },
  mediaButton: {
    width: '90%',
    height: 70,
  },
});

export default LoginScreen;
