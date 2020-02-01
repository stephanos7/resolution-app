import React from 'react';
import {
  StyleSheet, View
} from 'react-native';
import {spacing} from "../configStyles";

const styles = StyleSheet.create({
  horizontalMargins : {
    flex:1,
    margin:spacing.screenSides,
  }
  // bottomSafeArea:{
  //   flex:1,
  //   backgroundColor:colors.primaryBlack,
  // }
})

export const LayoutView = ({children}) => (
    <View style={styles.horizontalMargins} >
      {children}
    </View>
)