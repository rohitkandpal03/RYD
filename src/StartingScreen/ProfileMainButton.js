import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileMainButton = (props) => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <TouchableOpacity onPress={() => props.onClickProfile('aboutYou')}>
        <Button
          title={'About You'}
          titleStyle={{color: 'black', fontWeight: '600'}}
          type="outline"
          onPress={() => console.log('about you')}
          buttonStyle={[
            {
              borderTopStartRadius: 25,
              borderBottomStartRadius: 25,
              padding: '6%',
              borderColor: 'black',
            },
            props.showAbout
              ? {backgroundColor: 'white'}
              : {backgroundColor: 'transparent'},
          ]}
          containerStyle={{width: '110%'}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onClickProfile('manageCoins')}>
        <Button
          title={'Manage Coins'}
          type="outline"
          titleStyle={{color: 'black', fontWeight: '600'}}
          onPress={() => console.log('manageCoin')}
          buttonStyle={[
            {
              borderTopEndRadius: 25,
              borderBottomEndRadius: 25,
              padding: '6.5%',
              borderColor: 'black',
            },
            props.showCoins
              ? {backgroundColor: 'white'}
              : {backgroundColor: 'transparent'},
          ]}
          containerStyle={{width: '90%'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileMainButton;
