import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import moment from "moment";
import {Calendar, CalendarList} from 'react-native-calendars';

export const CalendarView = ({currentDate}) => {
  const currentFormattedDate = moment(currentDate).format("YYYY-MM-DD")
  const getEndOfYear = () => 
    `${moment().year()}-12-31`
  const endOfYear = getEndOfYear()
  return(
    <CalendarList
      scrollEnabled={true}
      // Initially visible month. Default = Date()
      current={currentFormattedDate}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2020-01-01'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={endOfYear}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={(day) => {console.log('selected day', day)}}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={(day) => {console.log('selected day', day)}}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'MMMM yyyy'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={(month) => {console.log('month changed', month)}}
      // Hide month navigation arrows. Default = false
      hideArrows={true}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={(direction) => (<Arrow/>)}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={true}
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={1}
      // Hide day names. Default = false
      hideDayNames={true}
      // Show week numbers to the left. Default = false
      showWeekNumbers={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={substractMonth => substractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={true}
      // Disable right arrow. Default = false
      disableArrowRight={true}

      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: 'transparent',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: 'blue',
        indicatorColor: 'blue',
        // textDayFontFamily: 'monospace',
        // textMonthFontFamily: 'monospace',
        // textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 26,
        textDayHeaderFontSize: 16
      }}
  />
  )
}