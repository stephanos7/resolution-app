import React from 'react';
import {
  StyleSheet, SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors,gradients} from "../configStyles";

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:colors.primaryBlack,
  },
  screenBody:{
    flex:1,
  },
  // bottomSafeArea:{
  //   flex:1,
  //   backgroundColor:colors.primaryBlack,
  // }
})

export const GradientView = ({children}) => (
  <SafeAreaView style={styles.safeArea}>
    <LinearGradient style={styles.screenBody} colors={[...gradients.darkGrey]}>
      {children}
    </LinearGradient>
  </SafeAreaView>
)