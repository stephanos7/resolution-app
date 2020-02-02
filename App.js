import React from 'react';
import {View, Text} from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AuthLoadingScreen} from "./screens/AuthLoadingScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { DayScreen } from "./screens/DayScreen";
import { colors } from './configStyles';
import { LoginScreen } from './screens/LoginScreen';
import {NewResolutionScreen} from './screens/NewResolutionScreen';

import {ThemeProvider, ThemeContext} from "./context/Theme";

const AppStack = createStackNavigator({
  Day : ({navigation}) => (
    <ThemeProvider>
      <DayScreen navigation={navigation} />
    </ThemeProvider>
  ) ,
  Calendar: ({navigation}) => (
    <ThemeProvider>
      <CalendarScreen navigation={navigation}  />
    </ThemeProvider>
  ),
  NewResolution: ({navigation}) => (
    <ThemeProvider>
      <NewResolutionScreen navigation={navigation}  />
    </ThemeProvider>
  )
  },
  {
    initialRouteName: 'Calendar',
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


const AppContainer = createAppContainer(
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

export default () => {

  return(
    <AppContainer /> 
  )
}
