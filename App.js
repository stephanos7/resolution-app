import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import moment from "moment";

import { CalendarCard } from "./components/CalendarCard";
import {ScreenView} from "./components/ScreenView"

const App = () => {
  const [currentDay, setCurrentDay] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  const getDay = () => {
    const day = moment().format("D");
    return setCurrentDay(day);
  }

  const getMonth = () => {
    const month = moment().format("MMMM");
    return setCurrentMonth(month);
  }

  useEffect(() => {
    getDay();
    getMonth();
  }, [])
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScreenView>
        <CalendarCard day={currentDay} month={currentMonth}/>
      </ScreenView>
    </>
  );
};

export default App;
