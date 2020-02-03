import React, {useState} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AuthLoadingScreen} from "./screens/AuthLoadingScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { DayScreen } from "./screens/DayScreen";
import { colors } from './configStyles';
import { LoginScreen } from './screens/LoginScreen';

import ThemeContext from "./context/Theme";
import { VerticalScreenTransitionProvider } from './context/VerticalScreenTransition';

const AppStack = createStackNavigator({
  Calendar: ({navigation}) => (<CalendarScreen navigation={navigation} />),
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
  const [theme, setTheme] = useState("Dark");
  const toggleTheme = theme => theme === "Dark" ? setTheme("Light" ):  setTheme("Dark");

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <AppContainer screenProps={{theme}} />
    </ThemeContext.Provider>
    )
}



export default () => { 

  return(
    <AppContainerWithTheme /> 
  )
}
