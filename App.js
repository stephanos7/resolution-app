import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AuthLoadingScreen} from "./screens/AuthLoadingScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { DayScreen } from "./screens/DayScreen";
import { colors } from './configStyles';
import { LoginScreen } from './screens/LoginScreen';
import {NewResolutionScreen} from './screens/NewResolutionScreen';

const AppStack = createStackNavigator({
  Day : DayScreen,
  Calendar: CalendarScreen,
  NewResolution: NewResolutionScreen
  },
  {
    initialRouteName: 'NewResolution',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.secondaryBlack,
        borderBottomWidth: 0,
        shadowColor: 'transparent'
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
  });

const AuthStack = createStackNavigator({ 
  Login:LoginScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.secondaryBlack,
        borderBottomWidth: 0,
        shadowColor: 'transparent'
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
});


export default AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);