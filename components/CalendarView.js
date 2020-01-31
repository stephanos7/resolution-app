import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text
} from 'react-native';
import moment, { calendarFormat } from "moment";
import {Calendar, CalendarList} from 'react-native-calendars';
import { colors, fontSizes } from '../configStyles';

export const CalendarView = ({navigation, currentDate}) => {
  const calendarDateFormat = "YYYY-MM-DD"
  const currentFormattedDate = moment(currentDate).format(calendarDateFormat)
  const getEndOfYear = () => 
    `${moment().year()}-12-31`
  const endOfYear = getEndOfYear()
  const handlePress = (day) =>  navigation.navigate('Day',{day})
  const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key:'workout', color: 'green'};
  const otherone = {key:'otherone', color: 'yellow'};
  const othertwo = {key:'othertwo', color: 'purple'};
  const otherthree = {key:'otherthree', color: 'white'};

    // TEST AREA

    const enumerateDaysBetweenDates = (startDate, endDate) => {
      let now = startDate.clone(), dates = [];
  
      while (now.isSameOrBefore(endDate)) {
          dates.push(now.format(calendarDateFormat));
          now.add(1, 'days');
      }
      console.log(dates);
  };
  
  const start = moment("2021-05-26")
  const end = moment("2021-06-01")


console.log("RUNNING TEST:::::::")
enumerateDaysBetweenDates(start,end)



  return(
    <CalendarList
      scrollEnabled={true}
      // Initially visible month. Default = Date()
      current={currentFormattedDate}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2020-01-01'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={currentFormattedDate}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={handlePress}
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
      // need this prop to have multiple markers on a date
      markingType={'multi-dot'}

      markedDates={{
        '2020-01-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
        '2020-01-26': {dots: [massage, workout, otherone, otherthree, othertwo, vacation], disabled: true}
      }}

      

      theme={{
        // backgroundColor: '#ffffff',
        calendarBackground: 'transparent',
        textSectionTitleColor: '#ffffff',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: "#ffffff",
        textDisabledColor: colors.incompleteGrey,
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        // arrowColor: 'orange',
        // disabledArrowColor: '#d9e1e8',
        monthTextColor: colors.white,
        indicatorColor: 'blue',
        // textDayFontFamily: 'monospace',
        // textMonthFontFamily: 'monospace',
        // textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: fontSizes.sm,
        textMonthFontSize: fontSizes.md,
        textDayHeaderFontSize: 16
      }}
  />
  )
}