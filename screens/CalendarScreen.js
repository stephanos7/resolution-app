import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import moment from "moment";

// import { CalendarCard } from "./components/CalendarCard";
import {ScreenView} from "../components/ScreenView";
import {CalendarView} from "../components/CalendarView";

export const CalendarScreen = props => {
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
      <CalendarView currentDate={currentDate}/>
      {/* <CalendarCard currentDate={currentDate}/> */}
    </ScreenView>
  </>
  )
}