import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, ListItem, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Next} from '../ImageComponent/svg/Next';
import {SettingPress} from './SettingPress';

const Setting = (props) => {
  const list = [
    {
      name: 'Name',
      iconName: 'person',
      subtitle: 'rk',
      type: 'ionicon',
    },
    {
      name: 'Email',
      iconName: 'mail',
      subtitle: 'rk@gmail.com',
      type: 'ionicon',
    },
    {
      name: 'Password',
      iconName: 'finger-print',
      type: 'ionicon',
      subtitle: 'updated 2 week ago',
    },
    {
      name: 'Phone Number',
      iconName: 'phone-android',
      subtitle: '9988774455',
      type: 'material',
    },
  ];

  const middleList = [
    {
      name: 'Scoreboard',
      iconName: 'star',
      type: 'ionicon',
    },
    {
      name: 'New Courses',
      iconName: 'add-box',
      type: 'material',
    },
    {
      name: 'Study Reminder',
      iconName: 'notifications',
      type: 'ionicon',
    },
  ];

  const bottomList = [
    {
      name: 'Help Center',
      iconName: 'help-circle',
      type: 'ionicon',
    },
    {
      name: 'Privacy & Terms',
      iconName: 'shield',
      type: 'font-awesome',
    },
    {
      name: 'Contact Us',
      iconName: 'commenting-o',
      type: 'font-awesome',
    },
  ];

  const [checked, setChecked] = useState({
    icon_0: false,
    icon_1: false,
    icon_2: false,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '8%',
            marginBottom: '2%',
          }}>
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="ionicon" color="#292059" />
          </TouchableOpacity>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}> Settings </Text>
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => console.log('dark mode pressed')}>
            <Icon name="moon" type="ionicon" color="black" />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: '0%'}}>
          <Card containerStyle={{borderRadius: 25}}>
            {list.map((li, i) => (
              <TouchableOpacity
                key={`${li.name}${i}`}
                activeOpacity={0.1}
                onPress={() => SettingPress(li.name)}>
                <ListItem
                  key={i}
                  rightIcon={
                    <Next width={'30px'} height={'30px'} fill={'#292059'} />
                  }
                  title={li.name}
                  titleStyle={{fontWeight: '700'}}
                  subtitle={li.subtitle}
                  leftIcon={
                    <Icon
                      reverse
                      name={li.iconName}
                      type={li.type}
                      color="#292059"
                    />
                  }
                />
              </TouchableOpacity>
            ))}
          </Card>
        </View>
        <View style={{marginTop: '2%'}}>
          <Card containerStyle={{borderRadius: 25}}>
            {middleList.map((li, i) => (
              <TouchableWithoutFeedback
                key={`${li.name}${i}`}
                onPress={() =>
                  setChecked({
                    ...checked,
                    [`icon_${i}`]: !eval(`checked.icon_${i}`),
                  })
                }>
                <ListItem
                  key={`${li.name}${i}`}
                  titleStyle={{fontWeight: '700'}}
                  rightIcon={
                    eval(`checked.icon_${i}`) ? (
                      <Icon
                        name="toggle-on"
                        type="font-awesome"
                        color="#292059"
                      />
                    ) : (
                      <Icon
                        name="toggle-off"
                        type="font-awesome"
                        color="#292059"
                      />
                    )
                  }
                  title={li.name}
                  leftIcon={
                    <Icon
                      reverse
                      name={li.iconName}
                      type={li.type}
                      color="#292059"
                    />
                  }
                />
              </TouchableWithoutFeedback>
            ))}
          </Card>
        </View>
        <View style={{marginTop: '2%', marginBottom: '4%'}}>
          <Card containerStyle={{borderRadius: 25}}>
            {bottomList.map((li, i) => (
              <TouchableOpacity
                key={`${li.name}${i}`}
                activeOpacity={0.1}
                onPress={() => SettingPress(li.name)}>
                <ListItem
                  key={`${li.name}${i}`}
                  titleStyle={{fontWeight: '700'}}
                  rightIcon={
                    <Next width={'30px'} height={'30px'} fill={'#292059'} />
                  }
                  title={li.name}
                  subtitle={li.subtitle}
                  leftIcon={
                    <Icon
                      reverse
                      name={li.iconName}
                      type={li.type}
                      color="#292059"
                    />
                  }
                />
              </TouchableOpacity>
            ))}
          </Card>
        </View>
        <TouchableOpacity onPress={() => console.log('Logout Pressed')}>
          <Text style={styles.logout}> LOGOUT </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    flex: 1,
    backgroundColor: '#dadae7',
  },
  logout: {
    alignSelf: 'center',
    marginBottom: '7%',
    marginTop: '2%',
    fontSize: 18,
    color: 'blue',
    fontWeight: '500',
  },
});

export default Setting;
