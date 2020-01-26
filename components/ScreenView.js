import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
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
  bottomSafeArea:{
    flex:1,
    backgroundColor:colors.primaryBlack,
  }
})

export const ScreenView = ({children}) => (
  <>
    <SafeAreaView style={styles.topSafeArea} />
    {/* the two safe area views allow for unique background colors on the top and bottom to match the screen gradient */}
    <SafeAreaView style={styles.bottomSafeArea}>
      <LinearGradient style={styles.screenBody} colors={[...gradients.darkGrey]}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  </>

)