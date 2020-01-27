import React from 'react';
// import moment from "moment";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {LoadingScreen} from "./screens/LoadingScreen";
import {CalendarScreen} from "./screens/CalendarScreen";
import {DayScreen} from "./screens/DayScreen";
import { colors } from './configStyles';
import { LoginScreen } from './screens/LoginScreen';

const AppNavigator = createStackNavigator({
  Loading: LoadingScreen,
  Login:LoginScreen,
  Day : DayScreen,
  Calendar: CalendarScreen,
  },
  {
    initialRouteName: 'Loading',
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

const AppContainer = createAppContainer(AppNavigator);

const app = () =>( <AppContainer />)

export default app