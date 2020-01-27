import React, {useEffect, useState} from 'react';
import {
  StatusBar,
} from 'react-native';
import moment from "moment";

import {ScreenView} from "../components/ScreenView";
import {CalendarView} from "../components/CalendarView";

export const CalendarScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState();

  const getCurrentDate = () => {
    const now = moment()
    return setCurrentDate(now);
  }

  useEffect(() => {
    getCurrentDate();
  }, [])

  return (
    <>
    <StatusBar barStyle="light-content" />
      <ScreenView>
      <CalendarView navigation={navigation } currentDate={currentDate}/>
    </ScreenView>
  </>
  )
}