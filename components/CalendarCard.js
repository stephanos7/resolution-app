
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {colors, spacing, radii} from "../configStyles";

const styles = StyleSheet.create({
  root:{
    borderRadius:radii.large,
    backgroundColor:colors.incompleteGrey,
    margin:spacing.screenSides,
    height: 500
  }
})

export const CalendarCard = ({children}) => (
  <View  style={styles.root}>
    {children}
  </View>
)