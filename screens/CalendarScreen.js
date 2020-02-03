import React, {useEffect, useState} from 'react';
import {
  StatusBar, Text
} from 'react-native';
import moment from "moment";

import { GradientView } from "../components/GradientView";
import { CalendarView } from "../components/CalendarView";
import { Mock } from "../components/Mock";

import { ThemeConsumer } from "../context/Theme";
import {  ScreenTransitionConsumer } from "../context/ScreenTransition";


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
    <ThemeConsumer>
        { ({theme}) =>
            (
              <ScreenTransitionConsumer>
              { ({screenInFocus, transitionScreen}) => (
              <>
              <StatusBar barStyle="light-content" />
              <GradientView theme={theme}>
                <Mock screenInFocus={screenInFocus}/>
                <CalendarView navigation={navigation} currentDate={currentDate}/>
              </GradientView>
              </>
              )}
            </ScreenTransitionConsumer> 
            )}
    </ThemeConsumer>

  )
}