import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Button, Input, Divider, Icon} from 'react-native-elements';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {useResponsiveHeight} from 'react-native-responsive-dimensions';

const Register = (props) => {
  const [value, setValue] = useState('');
  const [pass, setPass] = useState(false);
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, changeToggle] = useState(false);

  const signInHandler = (phoneNumber) => {
    if (phoneNumber.length === 10) {
      setPass(true);
    }

    return pass;
  };

  const ToggleHandler = () => {
    return changeToggle(!toggle);
  };

  const loginHandler = () => {
    return props.isLogin();
  };

  if (pass) {
    props.val.navigation.navigate('OTPScreen', {phone_number: value});
  }

  return (
    <View style={styles.footer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Input
            containerStyle={[
              styles.outerInput,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            inputContainerStyle={[
              styles.input,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            onChangeText={(text) => setName(text)}
            placeholder="Full Name"
            value={fullName}
          />
          <Input
            containerStyle={[
              styles.outerInput,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            inputContainerStyle={[
              styles.input,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            value={email}
          />
          <Input
            containerStyle={[
              styles.outerInput,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            inputContainerStyle={[
              styles.input,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            keyboardType="numeric"
            onChangeText={(text) => setValue(text)}
            placeholder="Phone number"
            maxLength={10}
            value={value}
          />

          <Input
            containerStyle={[
              styles.outerInput,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            inputContainerStyle={[
              styles.input,
              {height: useResponsiveHeight(5.5), fontSize: 12},
            ]}
            placeholder="Password"
            value={password}
            secureTextEntry={!toggle}
            rightIconContainerStyle={{alignSelf: 'center'}}
            onChangeText={(text) => setPassword(text)}
            rightIcon={
              <TouchableOpacity onPress={ToggleHandler}>
                {toggle ? (
                  <Icon name="visibility" type="material" />
                ) : (
                  <Icon name="visibility-off" type="material" />
                )}
              </TouchableOpacity>
            }
          />
          <TouchableOpacity onPress={() => signInHandler(value)}>
            <Button
              title={'Register'}
              buttonStyle={{borderRadius: 50, backgroundColor: 'black'}}
              containerStyle={{marginTop: '8%', borderRadius: 40}}
            />
          </TouchableOpacity>

          <Text style={{marginTop: '5%', alignSelf: 'center'}}>
            {' '}
            Already have an account?{' '}
            <Text onPress={loginHandler} style={{color: 'blue'}}>
              Login
            </Text>
          </Text>

          <Divider
            style={{
              marginTop: '4%',
              backgroundColor: 'black',
              marginBottom: '4%',
            }}
          />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Button
              title={' Register with Google '}
              buttonStyle={{backgroundColor: 'transparent', elevation: 1}}
              titleStyle={{color: 'red', marginLeft: 10}}
              containerStyle={styles.mediaButton}
              icon={
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/google.png')}
                />
              }
            />
            <Button
              title={' Register with Facebook'}
              buttonStyle={{backgroundColor: 'transparent', elevation: 1}}
              titleStyle={{color: 'blue', marginLeft: 10}}
              TouchableOpacity="0.5"
              containerStyle={styles.mediaButton}
              icon={
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/facebook.png')}
                />
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
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
  mediaButton: {
    width: '90%',
    height: 70,
  },
  input: {
    borderColor: '#F4F6FF',
    borderWidth: 1,
    borderRadius: 15,

    color: 'black',

    paddingBottom: -1,
    backgroundColor: '#f4f4f4',
  },
  outerInput: {
    borderColor: '#F4F6FF',
    borderWidth: 1,

    borderRadius: 15,
    color: 'black',
    marginTop: '1%',
    backgroundColor: '#f4f4f4',
  },
});

export default Register;
