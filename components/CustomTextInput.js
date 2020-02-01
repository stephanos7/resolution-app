import React from 'react';
import {
  StyleSheet, TextInput
} from 'react-native';
import {spacing, colors, fontSizes} from "../configStyles";

const styles = StyleSheet.create({
  root : {
    borderColor:"yellow"
  }
})


export const CustomTextInput = ({text}) => {
  return (
    <TextInput 
    style={styles.root}
    editable
    maxLength={40}
    >
      {text}
      </TextInput>
  )
}