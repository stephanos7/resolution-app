
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from "../configStyles";

const styles = StyleSheet.create({
  root:{
    backgroundColor:"green",
    height:500
  }
})

export const CalendarCard = props => (
  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}  style={styles.root}>
    <Text style={{fontWeight:"bold", color:colors.success}}>26TH December</Text>
  </LinearGradient>
)