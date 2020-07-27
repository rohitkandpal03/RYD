import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Icon} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{aspectRatio: 6 / 2}}></View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/notification.png')}
          style={{width: 210, height: 190}}
        />
        <Text style={styles.text}>Notifications</Text>
        <Text style={{fontSize: 18, alignSelf: 'center', color: '#808080'}}>
          <Text>{`Stay notified about new course
updates, scoreboard stats and 
            new friend follows`}</Text>
        </Text>
        <Button
          title={'ALLOW'}
          titleStyle={{fontSize: 20, fontWeight: '600', marginRight: '6%'}}
          containerStyle={{marginTop: '4%'}}
          buttonStyle={{
            width: 160,
            height: 60,
            borderRadius: 15,
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

        <Button
          title={' Skip '}
          titleStyle={{fontSize: 20, fontWeight: '600', color: '#808080'}}
          containerStyle={{marginTop: '6%', marginBottom: '8%'}}
          type="clear"
          TouchableComponent={TouchableWithoutFeedback}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  text: {
    fontSize: 24,
    marginTop: '8%',
    fontWeight: 'bold',
    color: '#3f3f44',
  },
});

export default Notification;
