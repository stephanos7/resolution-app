import React, {useEffect, useState} from 'react';
import {
  StatusBar, Text
} from 'react-native';
import moment from "moment";

import { GradientView } from "../components/GradientView";
import { CalendarView } from "../components/CalendarView";
import { Mock } from "../components/Mock";

import ThemeContext from "../context/Theme";
import { 
  VerticalScreenTransitionContext,
   VerticalScreenTransitionProvider 
} from "../context/VerticalScreenTransition";


export const CalendarScreen = ({navigation, themeContext}) => {
  const {theme} = React.useContext(ThemeContext);
  console.log(theme)
  const [currentDate, setCurrentDate] = useState();
  const getCurrentDate = () => {
    const now = moment()
    return setCurrentDate(now);
  }

  useEffect(() => {
    return getCurrentDate();
  }, [])

  return (
      <>
        <StatusBar barStyle="light-content" />
        <GradientView >
          <Mock />
          {/* <Text style={{color:"red"}}>{theme}</Text> */}
          <CalendarView navigation={navigation} currentDate={currentDate}/>
        </GradientView>
      </>
  )
}