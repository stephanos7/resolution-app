import React, {useState} from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import {spacing, colors, fontSizes} from "../configStyles";
import { LayoutView } from './LayoutView';

const styles = StyleSheet.create({
  root : {
    flex:1,
  },
  label:{
    color:colors.white,
    fontSize:fontSizes.md,
    marginBottom:spacing.md
  }
})


export const FormGroup = ({children, label}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>
        {label}
      </Text>
      {children}
    </View>
  )
}