import React, {useState, Suspense, lazy} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ProfileMainButton from '../StartingScreen/ProfileMainButton';
import {LinearGradient} from 'expo-linear-gradient';
import BottomAboutYou from '../StartingScreen/BottomAboutYou';
import {color} from 'react-native-reanimated';
const BottomManageCoins = lazy(() => import('./BottomManageCoins'));

const Profile = (props) => {
  const [name, setName] = useState('Humpty Dumpty ');
  // const [badgeName, setBadgeName] = useState('Badge ');
  const [rank, setRank] = useState(15870);
  // const [questionSolved, setQuestionSolved] = useState(110);
  const [avatar_url, setAvatar_url] = useState(require('../assets/user.jpg'));
  // const [about, setAbout] = useState('Member since ...');
  //const [page, setPage] = useState(true);
  const [showAbout, setAbout] = useState(true);
  const [showCoins, setCoins] = useState(false);

  const profilePageHandler = (name) => {
    switch (name) {
      case 'aboutYou':
        setAbout(true);
        setCoins(false);

        return 1;

      case 'manageCoins':
        setAbout(false);
        setCoins(true);
        return 1;

      default:
        return 0;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#dadae7', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 350,
        }}
      />
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.navigate('Setting')}>
          <Icon
            style={{alignSelf: 'flex-end', marginRight: '4%', marginTop: '4%'}}
            type="material"
            name="settings"
            color="black"
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '2%',
            marginRight: '2%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Avatar
            size="xlarge"
            icon={{name: 'person'}}
            title={name[0]}
            imageProps={{resizeMode: 'center'}}
            source={avatar_url}
            containerStyle={{
              borderColor: '#e4e3e3',
            }}
            overlayContainerStyle={{backgroundColor: '#e4e3e3'}}
            rounded
            onPress={() => console.log('Works!')}
          />
          <Text style={{color: '#292059', fontSize: 22, marginTop: '3%'}}>
            {' '}
            {name}{' '}
          </Text>
          <Text style={styles.text}> {rank} </Text>
        </View>

        <View style={{marginTop: '2%'}}>
          <ProfileMainButton
            onClickProfile={profilePageHandler}
            showAbout={showAbout}
            showCoins={showCoins}
          />
        </View>
        <View
          style={[
            styles.footer,
            {
              marginTop: '4%',
              flexDirection: 'column',
            },
          ]}>
          {showAbout ? (
            <Suspense fallback={<View />}>
              <BottomAboutYou />
            </Suspense>
          ) : null}
          {showCoins ? (
            <Suspense fallback={<View />}>
              <BottomManageCoins />
            </Suspense>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    flex: 1,
    // backgroundColor: '#dadae7',
  },
  footer: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    width: '85%',
    height: Dimensions.get('screen').height - 150,
    zIndex: 1000,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#292059',
    marginTop: '3%',
    marginBottom: '4.5%',
  },
});

export default Profile;
