import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors, fontSizes, spacing } from "../configStyles";

const styles = StyleSheet.create({
  root:{
    color:colors.white,
    marginBottom:spacing.md
  },
  fontsmall : {
    fontSize:fontSizes.sm,
  },
  fontmedium : {
    fontSize:fontSizes.md,
  }
})

export const FormLabel = ({label, size}) => {
  return (
    <Text style={[styles.root, styles[`font${size}`]]}>
      {label}
    </Text>
  )
}