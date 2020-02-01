import React, {useEffect, useState} from 'react';
import {
  StatusBar,
} from 'react-native';
import moment from "moment";

import {GradientView} from "../components/GradientView";
import {CalendarView} from "../components/CalendarView";

export const CalendarScreen = ({navigation}) => {
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
      <CalendarView navigation={navigation } currentDate={currentDate}/>
    </GradientView>
  </>
  )
}