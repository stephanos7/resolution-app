import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import moment from "moment";
import {colors, spacing, radii} from "../configStyles";
import { CalendarDate } from './CalendarDate';

const styles = StyleSheet.create({
  root:{
    alignItems:"center",
    borderRadius:radii.large,
    backgroundColor:colors.incompleteGrey,
    display: "flex",
    justifyContent:"center",
    margin:spacing.screenSides,
    minHeight:300,
    maxHeight:400
  }
})

export const CalendarCard = ({selectedDate=""}) => {
  const formattedDay = moment(selectedDate.timestamp).format("D")
  const formattedMonth = moment(selectedDate.timestamp).format("MMMM")
    
  return(
  <View  style={styles.root}>
    <CalendarDate day={formattedDay} month={formattedMonth}/>
  </View>
  )
} 