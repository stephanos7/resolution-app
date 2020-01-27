import React from 'react';
// import moment from "moment";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {CalendarScreen} from "./screens/CalendarScreen";
import {DayScreen} from "./screens/DayScreen";
import { colors } from './configStyles';

const AppNavigator = createStackNavigator({
  Day : DayScreen,
  Calendar: CalendarScreen,
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

const AppContainer = createAppContainer(AppNavigator);

const app = () =>( <AppContainer />)

export default app