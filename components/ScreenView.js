import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors,gradients} from "../configStyles";

const styles = StyleSheet.create({
  topSafeArea:{
    flex:0,
    backgroundColor:colors.secondaryBlack,
  },
  screenBody:{
    flex:1,
  },
  // bottomSafeArea:{
  //   flex:1,
  //   backgroundColor:colors.primaryBlack,
  // }
})

export const ScreenView = ({children}) => (
    <LinearGradient style={styles.screenBody} colors={[...gradients.darkGrey]}>
      {children}
    </LinearGradient>
)