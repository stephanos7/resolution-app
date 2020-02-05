import React, {useState} from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import { FormLabel } from './FormLabel';

const styles = StyleSheet.create({
  root : {
    flex:1,
  }
})


export const FormGroup = ({children, label}) => {
  return (
    <View style={styles.root}>
      <FormLabel label={label} size="medium" />
      {children}
    </View>
  )
}