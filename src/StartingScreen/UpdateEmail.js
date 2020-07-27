import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  useResponsiveWidth,
  useResponsiveHeight,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Icon} from 'react-native-elements';

const UpdateEmail = (props) => {
  const [value, onChangeText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: '6%',
          flexDirection: 'row',
          marginLeft: '5%',
        }}>
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => console.log('back Pressed')}>
          <Icon name="arrow-back" type="ionicon" color="blue" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: useResponsiveWidth(20),
          }}>
          <Text style={styles.text}>Update Email</Text>
          <Text style={{alignSelf: 'center', fontSize: 16, marginTop: '3%'}}>
            Enter your new email {'\n'}
            {'      '} address below.
          </Text>
        </View>
      </View>
      <View style={{marginTop: '8%', alignItems: 'center'}}>
        <TextInput
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={[
            styles.textInput,
            {width: useResponsiveWidth(80), marginTop: useResponsiveHeight(10)},
          ]}
          placeholder={'Enter email-address'}
        />
        <Text style={{marginTop: '12%', fontSize: 15, color: '#808080'}}>
          {' '}
          We will send an email to verify {'\n'}
          {'       '} your new email address{' '}
        </Text>
        <Button
          title={'SAVE'}
          titleStyle={{
            fontSize: 20,
            fontWeight: '600',
          }}
          containerStyle={{marginTop: '10%'}}
          buttonStyle={{
            width: useResponsiveWidth(90),
            height: 60,
            borderRadius: 15,
          }}
          iconContainerStyle={{
            alignSelf: 'baseLine',
          }}
          icon={
            <Icon
              reverse
              size={15}
              name="arrow-forward"
              type="material"
              color="blue"
            />
          }
          iconRight={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '5%',

    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f3f44',
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 8,

    marginRight: '3%',
    marginLeft: '3%',
  },
});

export default UpdateEmail;
