import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import moment from "moment";

import { CalendarCard } from "./components/CalendarCard";
import {ScreenView} from "./components/ScreenView";
import {CalendarView} from "./components/CalendarView";
const App = () => {
  const [currentDate, setCurrentDate] = useState();

  const getCurrentDate = () => {
    const now = moment()
    // const day = moment().format("D");

    return setCurrentDate(now);
  }

  // const getMonth = () => {
  //   const month = moment().format("MMMM");
  //   return setCurrentMonth(month);
  // }

  useEffect(() => {
    getCurrentDate();
  }, [])
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScreenView>
      {/* <CalendarView /> */}
        <CalendarCard currentDate={currentDate}/>
      </ScreenView>
    </>
  );
};

export default App;
