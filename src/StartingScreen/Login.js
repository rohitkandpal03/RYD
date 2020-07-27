import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Button, Divider, Input, Icon} from 'react-native-elements';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {useResponsiveWidth} from 'react-native-responsive-dimensions';

const Login = (props) => {
  const [pass, setPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, changeToggle] = useState(false);

  const LoginHandler = (props) => {
    setPass(true);
    return pass;
  };

  const ToggleHandler = () => {
    return changeToggle(!toggle);
  };

  if (pass) {
    props.val.navigation.navigate('Home');
    console.log('Will move to homepage');
  }

  return (
    <View style={styles.footer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Input
            containerStyle={[
              styles.outerInput,
              {width: useResponsiveWidth(80)},
            ]}
            inputContainerStyle={styles.textInput}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            value={email}
          />

          <Input
            containerStyle={[
              styles.outerInput,
              {width: useResponsiveWidth(80)},
            ]}
            inputContainerStyle={styles.textInput}
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
          <View style={{marginTop: '1%'}}>
            <Text style={{color: '#01a9b4', alignSelf: 'flex-end'}}>
              Forget Password?
            </Text>
          </View>

          <TouchableOpacity onPress={LoginHandler}>
            <Button
              title={'Login'}
              buttonStyle={{borderRadius: 50, backgroundColor: 'black'}}
              containerStyle={{marginTop: 20, borderRadius: 40}}
            />
          </TouchableOpacity>

          <Divider
            style={{
              marginTop: '8%',
              backgroundColor: 'black',
              marginBottom: 20,
            }}
          />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Button
              title={' Login with Google'}
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
              title={' Login with Facebook'}
              buttonStyle={{backgroundColor: 'transparent', elevation: 1}}
              titleStyle={{color: 'blue', marginLeft: 10}}
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
    borderRadius: 20,
    color: 'black',
    fontSize: 12,
    backgroundColor: '#f4f4f4',
  },
  outerInput: {
    height: 40,
    borderColor: '#F4F6FF',
    borderWidth: 1,
    borderRadius: 20,
    color: 'black',
    marginTop: '1%',
    backgroundColor: '#f4f4f4',
  },
  mediaButton: {
    width: '90%',
    height: 70,
  },
});

export default Login;
