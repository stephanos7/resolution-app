import React, {useEffect, useState} from 'react';
import {
  StatusBar
} from 'react-native';

import { GradientView } from "../components/GradientView";
import { CalendarView } from "../components/CalendarView";
import { Mock } from "../components/Mock";

import { ThemeConsumer } from "../context/ThemeContext";
import { DatesConsumer } from "../context/DatesContext";
import { ScreenTransitionConsumer } from "../context/ScreenTransitionContext";


export const CalendarScreen = ({navigation}) => {
  return (
    <ThemeConsumer>
        { ({theme}) => (
              <ScreenTransitionConsumer>
              { ({screenInFocus, toggleScreen}) => (
                  <DatesConsumer>
                    { ({currentDate}) => (
                      <>
                      <StatusBar barStyle="light-content" />
                      <GradientView theme={theme}>
                        <Mock screenInFocus={screenInFocus} toggleScreen={toggleScreen} currentDate={currentDate} />
                        <CalendarView screenInFocus={screenInFocus} navigation={navigation} currentDate={currentDate}/>
                      </GradientView>
                      </>
                    )}
                  </DatesConsumer>
              )}
            </ScreenTransitionConsumer> 
            )}
    </ThemeConsumer>

  )
}