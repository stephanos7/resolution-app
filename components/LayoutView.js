import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import {spacing} from "../configStyles";

const styles = StyleSheet.create({
  root : {
    flex:1,
    margin:spacing.screenSides,
  }
})

export const LayoutView = ({children}) => (
    <View style={styles.root} >
      {children}
    </View>
)