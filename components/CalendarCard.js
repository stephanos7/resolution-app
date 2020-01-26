import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
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

export const CalendarCard = ({day = 1, month="DECEMBER"}) => (
  <View  style={styles.root}>
    <CalendarDate day={day} month={month}/>
  </View>
)