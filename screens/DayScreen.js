import React from "react";
import {Text} from "react-native";
import {GradientView} from "../components/GradientView";
import { CalendarCard } from "../components/CalendarCard";
import ThemeContext from "../context/Theme";

export const DayScreen = ({navigation}) => {
  const getCurrentDateFromTheDateSelectedOnCalendar = navigation.getParam('day', 0)

  return (
    <ThemeContext.Consumer>
      { themeContext => (
          <GradientView theme={themeContext.theme}>
            <Text style={{color:"red"}}>{themeContext.theme}</Text>
            <CalendarCard selectedDate={getCurrentDateFromTheDateSelectedOnCalendar} />
          </GradientView>
      )}
    </ThemeContext.Consumer>

  )
}