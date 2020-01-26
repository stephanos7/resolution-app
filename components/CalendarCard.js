
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors,gradients} from "../configStyles";

const styles = StyleSheet.create({
  root:{
    backgroundColor:"green",
    height:500,
  }
})

export const CalendarCard = ({children}) => (
  <LinearGradient colors={[...gradients.darkGrey]}  style={styles.root}>
    {children}
  </LinearGradient>
)