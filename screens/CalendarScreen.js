import React, {useEffect, useState} from 'react';
import {
  StatusBar, Text
} from 'react-native';
import moment from "moment";

import { GradientView } from "../components/GradientView";
import { CalendarView } from "../components/CalendarView";

import { ThemeContext} from "../context/Theme";

export const CalendarScreen = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext)
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
      <GradientView>
        <Text style={{color:"red"}}>{theme}</Text>
        <CalendarView navigation={navigation} currentDate={currentDate}/>
      </GradientView>
  </>
  )
}