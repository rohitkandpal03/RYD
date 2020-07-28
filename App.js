import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/StartingScreen/WelcomeScreen';
import LoginScreen from './src/StartingScreen/LoginScreen';
import OTPScreen from './src/StartingScreen/OTPScreen';
import Profile from './src/StartingScreen/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/main/mainPage';
import Practice from './src/main/practice';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import SearchPage from './src/common/searchPage';
import Quiz from './src/main/quiz';
import Main from './src/components/quizmania/screens/main';
import Join from './src/components/quizmania/screens/join';
import Host from './src/components/quizmania/screens/host';
import Leaderboard from './src/components/quizmania/screens/leaderboard';
import GameId from './src/components/quizmania/screens/gameId';
import Setting from './src/StartingScreen/Setting';
import {ThemeProvider} from 'react-native-elements';
import {theme} from './src/StartingScreen/Theme';
import FlashCard from './src/StartingScreen/FlashCard';
import CongoQuiz from './src/StartingScreen/CongoQuiz';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const test = createStackNavigator();

const Router = () => {
  return (
    <test.Navigator>
      <test.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Quiz Room',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <test.Screen
        name="Host"
        component={Host}
        options={{
          title: 'Host',
          headerStyle: {
            backgroundColor: '#620bee',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />

      <test.Screen
        name="Join"
        component={Join}
        options={{
          title: 'Join Room',
          headerStyle: {
            backgroundColor: '#620bee',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <test.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          title: 'Score Board',
          headerStyle: {
            backgroundColor: '#620bee',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />
      <test.Screen
        name="GameId"
        component={GameId}
        options={{
          title: 'Quiz Room',
          headerStyle: {
            backgroundColor: '#620bee',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTintColor: 'white',
        }}
      />
    </test.Navigator>
  );
};

const Homepage = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let colors = focused ? '#292059' : '#A0A1CA';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Quiz Mania') {
            iconName = focused ? 'coins' : 'coins';
          } else if (route.name === 'Prepare') {
            iconName = focused ? 'pencil-ruler' : 'pencil-ruler';
          }
          return <Ionicons name={iconName} size={25} color={colors} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#292059',
        inactiveTintColor: '#A0A1CA',
        keyboardHidesTabBar: true,
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Prepare" component={Practice} />
      <Tab.Screen name="Quiz Mania" component={Router} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Test = () => {
  <NavigationContainer>
    <Stack.test />
  </NavigationContainer>;
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="CongoQuiz">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="SearchPage" component={SearchPage} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="CongoQuiz" component={CongoQuiz} />
          <Stack.Screen name="FlashCard" component={FlashCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
