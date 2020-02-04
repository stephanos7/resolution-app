import React, {useState} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AuthLoadingScreen} from "./screens/AuthLoadingScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { DayScreen } from "./screens/DayScreen";
import { colors } from './configStyles';
import { LoginScreen } from './screens/LoginScreen';

import { ThemeProvider } from "./context/ThemeContext";
import { DatesProvider } from "./context/DatesContext";
import { ScreenTransitionProvider } from "./context/ScreenTransitionContext";

const AppStack = createStackNavigator({
  Calendar: ({navigation}) => 
  (
    <ScreenTransitionProvider>
      <DatesProvider>
        <CalendarScreen navigation={navigation} />
      </DatesProvider>
    </ScreenTransitionProvider>
  ),
  Day : ({navigation}) => (<DayScreen navigation={navigation} />),
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

const AppContainerWithTheme = () => {


  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
    )
}



export default () => { 

  return(
    <AppContainerWithTheme /> 
  )
}
