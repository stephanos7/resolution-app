
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  root:{
    backgroundColor:"green"
  }
})

export const CalendarCard = props => (
  <View style={styles.root}>
    <Text>26TH December</Text>
  </View>
)