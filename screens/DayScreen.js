import React from "react";
import {ScreenView} from "../components/ScreenView";
import { CalendarCard } from "../components/CalendarCard";

export const DayScreen = ({navigation}) => {
  const getCurrentDateFromTheDateSelectedOnCalendar = navigation.getParam('day', 0)

  return (
    <ScreenView>
      <CalendarCard selectedDate={getCurrentDateFromTheDateSelectedOnCalendar} />
    </ScreenView>
  )
}