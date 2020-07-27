import React, {useState} from 'react';
import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  useResponsiveWidth,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';

const OTPScreen = (props) => {
  const {route} = props;

  const {phone_number} = route.params;
  const onSubmitHandler = () => props.navigation.replace('Profile');
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: useResponsiveWidth(10),
          height: useResponsiveHeight(6),
          alignItems: 'center',
          marginVertical: '10%',
        }}
        source={require('../assets/androidPhone.jpg')}
      />
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{height: useResponsiveHeight(7)}}>
            OTP SMS sent to {phone_number}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}>
            <Image
              style={{width: 22, height: 22}}
              source={require('../assets/pencil.jpg')}
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.text}
          value={otp}
          onChangeText={(text) => setOtp(text)}
          placeholder="OTP will be autofilled from SMS"
          keyboardType="numeric"
          importantForAutofill="auto"
        />
      </View>
      <TouchableOpacity>
        <Button
          buttonStyle={{
            width: useResponsiveWidth(40),
            height: useResponsiveHeight(8),
          }}
          title={'Confirm'}
          onPress={onSubmitHandler}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 120,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => console.log('Presseddd')}>
        <Text> Resend OTP </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    justifyContent: 'center',
    marginBottom: 20,

    alignSelf: 'center',
    marginTop: '2%',
  },
});

export default OTPScreen;
