import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import UpcomingClassScreen from './screens/UpcomimgClassScreen';
import SettingScreen from './screens/Setting';
import NotificationScreen from './screens/NotificationScreen';
import HomeScreen from './screens/HomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
export default class App extends React.Component {
  render(){
  return (
    <View>
    <AppContainer/>
    </View>
  );
  }
}
const switchNavigator=createSwitchNavigator({
WelcomeScreen:{screen:WelcomeScreen},
UpcomingClassScreen:{screen:UpcomingClassScreen},
SettingScreen:{screen:SettingScreen},
NotificationScreen:{screen:NotificationScreen},
HomeScreen:{screen:HomeScreen},
Drawer:{screen:AppDrawerNavigator}
})
const AppContainer=createAppContainer(switchNavigator)
