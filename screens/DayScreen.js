import React from "react";
import {GradientView} from "../components/GradientView";
import { CalendarCard } from "../components/CalendarCard";

export const DayScreen = ({navigation}) => {
  const getCurrentDateFromTheDateSelectedOnCalendar = navigation.getParam('day', 0)

  return (
    <GradientView>
      <CalendarCard selectedDate={getCurrentDateFromTheDateSelectedOnCalendar} />
    </GradientView>
  )
}