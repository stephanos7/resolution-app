import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {fontSizes} from '../configStyles';

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  day:{
    fontSize:fontSizes.xxl,
    fontWeight:"900",
    marginBottom:-20
  },
  month:{
    fontSize:fontSizes.md,
    fontWeight:"900",
  }
})

export const CalendarDate = ({day, month}) => (
  <View style={styles.container}>
    <Text style={styles.day}>
      {day}
    </Text>
    <Text style={styles.month}>
      {month}
    </Text>
  </View>

)