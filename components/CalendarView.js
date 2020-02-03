import React, {useEffect, useState} from 'react';
import {
  View
} from 'react-native';
import moment, { calendarFormat } from "moment";
import {Calendar, CalendarList} from 'react-native-calendars';
import { colors, fontSizes } from '../configStyles';

export const CalendarView = ({navigation, currentDate, screenInFocus, transitionScreen}) => {
  const calendarDateFormat = "YYYY-MM-DD"
  const currentFormattedDate = moment(currentDate).utc().format(calendarDateFormat)
  const getEndOfYear = () => {
    const currentYear = moment().year()
    return moment(`${currentYear}-12-31`).utc()
    // .format(calendarDateFormat)
  }
  const getStartOfYear = () => {
    const currentYear = moment().year()
    return moment(`${currentYear}-01-01`).utc()
    // .format(calendarDateFormat)
  }

  const endOfYear = getEndOfYear()
  const startOfYear = getStartOfYear();
  const handlePress = (day) =>  navigation.navigate('Day',{day})
  const resolutionPresent = {key:'resolutionPresent', color: 'yellow'};
  const incomplete = {key:'incomplete', color: 'white'};
  const missed = {key:'missed', color: 'red'};


    // TEST AREA

    const createDateMarkersAtIntervals = (startDate, endDate, interval, ...dots) => {
      let now = startDate.clone(), dates = {}
  
      while (now.isSameOrBefore(endDate)) {
          let formattedNow = now.format(calendarDateFormat) 
          Object.defineProperty(dates,formattedNow, {
            value: {dots:[...dots]},
            writable: true,
            enumerable: true,
            configurable: true
          });
          now.add(interval, 'days');
          console.log(dates)
      }
      return dates;
  };
  
   
  const start1 = moment("2020-05-26")
  const end1 = moment("2020-06-01")
  const start2 = moment("2020-05-26")
  const end2 = moment("2020-06-29")

// const activity1 = enumerateDaysBetweenDates(start1,end1)
// const activity2 = enumerateDaysBetweenDates(start2,end2)
const activityToPlay = ["2020-05-26","2020-05-27","2020-05-29"];

// const allDaysOfYear = 
// enumerateDaysBetweenDates(startOfYear, endOfYear)
// const createDateMarker = (inputForKey) => {
//   let marker = {}
//   marker[`${inputForKey}`] = {dots: [], disabled: true}
//   console.log(marker)
// }
const getTheFirstDayYouNameInTheYear = (nameOfDay, startingDate) => {
  const dayToCheckAgainst = startingDate.clone()
  const possibleDayNames = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  if(possibleDayNames.includes(nameOfDay)){
    while (!(dayToCheckAgainst.format("dddd") === nameOfDay) ){
      dayToCheckAgainst.add(1,"days");
      console.log(dayToCheckAgainst, dayToCheckAgainst.format("dddd"))
    }
  }else{
    return false
  }
  console.log(dayToCheckAgainst)
}
// getTheFirstDayYouNameInTheYear("Monday", startOfYear)




// const dateMarkers = createDateMarkersAtIntervals(start2,end2,7,resolutionPresent, incomplete)

// END OF TEST AREA

  return(
    <View style={{flex:3}}>
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

      // markedDates={{
      //   ...dateMarkers
      // }}

      

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
  </View>

  )
}