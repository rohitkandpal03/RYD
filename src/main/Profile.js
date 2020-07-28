import React, {useState, Suspense, lazy} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ProfileMainButton from '../StartingScreen/ProfileMainButton';
import BottomProfile from '../StartingScreen/BottomProfile';
import { LinearGradient } from "expo-linear-gradient";
const BottomRegister = lazy(() => import('../StartingScreen/BottomRegister'));
const Register = lazy(() => import('../StartingScreen/Register'));

const Profile = (props) => {
  const [name, setName] = useState('Humpty Dumpty ');
  const [badges, setBadges] = useState('Badge ');
  const [rank, setRank] = useState(10);
  const [questionSolved, setQuestionSolved] = useState(110);
  const [avatar_url, setAvatar_url] = useState(require('../assets/user.jpg'));
  const [about, setAbout] = useState('Member since ...');

  const [page, setPage] = useState(true);

  const profilePageHandler = () => {
    return setPage(true);
  };
  const registerPageHandler = () => {
    return setPage(false);
  };

  return (
    <SafeAreaView style={styles.container}>
       <LinearGradient
        colors={["#292059", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 150,
        }}
      />
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.navigate('Setting')}>
          <Icon
            style={{alignSelf: 'flex-end', marginRight: '4%', marginTop: '4%'}}
            type="material"
            name="settings"
            color="#808080"
          />
        </TouchableOpacity>
        {page ? (
          <View
            style={{
              flexDirection: 'row',
              marginLeft: '2%',
              marginRight: '2%',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}> {name} </Text>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16}}> {badges} </Text>
              </View>
              <Text style={{fontSize: 16, alignSelf: 'center'}}> {rank} </Text>
              <Text style={{fontSize: 16, alignSelf: 'center'}}>
                {questionSolved}
              </Text>
            </View>
            <Avatar
              size="xlarge"
              icon={{name: 'person'}}
              title={name[0]}
              imageProps={{resizeMode: 'cover'}}
              source={avatar_url}
              containerStyle={{
                borderColor: '#e4e3e3',
                elevation: 15,
                alignSelf: 'flex-end',
              }}
              overlayContainerStyle={{backgroundColor: '#e4e3e3'}}
              rounded
              onPress={() => console.log('Works!')}
            />
          </View>
        ) : (
          <Suspense fallback={<View />}>
            <Register avatarTitle={name[0]} avatarUrl={avatar_url} />
          </Suspense>
        )}

        <View style={{marginTop: '2%'}}>
          <ProfileMainButton
            onClickProfile={profilePageHandler}
            onClickRegister={registerPageHandler}
            page={page}
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
          {page ? (
            <BottomProfile />
          ) : (
            <Suspense fallback={<View />}>
              <BottomRegister />
            </Suspense>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    marginLeft: '3%',
    marginRight: '3%',
    zIndex: 1000,
    paddingHorizontal: 20,
  },
});

export default Profile;
