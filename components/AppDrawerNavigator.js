import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UpcomingClassScreen from '../screens/UpcomimgClassScreen';
import SettingScreen from '../screens/Setting';

export const AppDrawerNavigator=createDrawerNavigator({
Home:{
  screen:HomeScreen
},
Notifications:{
  screen:NotificationScreen
},
UpcomingClasses:{
  screen:UpcomingClassScreen
},
Settings:{
  screen:SettingScreen
}
},
{
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
