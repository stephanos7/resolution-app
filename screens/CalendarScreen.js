import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Platform,
  NativeModules,
  LayoutAnimation,
  Text,
  View,
  Animated,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { GradientView } from "../components/GradientView";
import { CalendarView } from "../components/CalendarView";

import { ThemeConsumer } from "../context/ThemeContext";
import { DatesConsumer } from "../context/DatesContext";
import { ScreenTransitionConsumer } from "../context/ScreenTransitionContext";

import { 
  radii, 
  colors, 
  spacing,
  fontSizes
} from "../configStyles";

const { UIManager } = NativeModules;  

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const styles = StyleSheet.create({
  newResContainer : {
    backgroundColor:"transparent",
  }
})

export const CalendarScreen = ({navigation}) => {
  // checks whether the screen is expanded during the animation
  const [expanded, setExpanded] = useState(false);

  // checks the New Resolution Button is mounted or unmounted
  const [newResButton, setNewResButton] = useState(true);

  // changes the opacity of the New Res Button during the animation
  const [newResButtonOpacity, setNewResButtonOpacity] = useState(new Animated.Value(1))

  // changes the opacity of the New Res Form during the animation
  const [newResFormOpacity, setNewResFormOpacity] = useState(new Animated.Value(0))

  // expands the screen when "Create New Resolution" is selected
  const expandNewResolution = () => setExpanded(true);

  // collapses the screen when the users is finished with "Create New Resolution"
  const collapseNewResolution = () => setExpanded(false);

  // mounts the New Res Button on the DOM after the screen is collapsed during the animation
  const mountNewResButton = () => setNewResButton(true);

  // unmounts the New Res Button on the DOM after the screen is collapsed during the animation
  const unmountNewResButton = () => setNewResButton(false);

  // the flex style property to animate the screen layout during expand/collapse phase of the animation
  const animatedFlex = (expanded ? {flex:12}: {flex:1})

  // ANIMATION HANDLERS:
  const animateNewResButtonOpacity = (value) => Animated.timing(
    newResButtonOpacity,
    {
      toValue: value,
      duration:150,
      useNativeDriver: true
    },
  )

  const animateNewResFormOpacity = (value) => Animated.timing(
    newResFormOpacity,
    {
      toValue: value,
      duration:100,
      useNativeDriver: true
    },
  )
  
  // PRESS EVENT HANDLERS
  const handleExpandPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(
      // duration
      300,
      // type
      LayoutAnimation.Types.timing,
      // creation prop
      LayoutAnimation.Properties.scaleY,
    ),
     () => unmountNewResButton()
    )
    expandNewResolution();
  }

  const handleCollapsePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(
      // duration
      300,
      // type
      LayoutAnimation.Types.timing,
      // creation prop
      LayoutAnimation.Properties.scaleY,
    ),
    () => mountNewResButton()
    )
    collapseNewResolution();
  }

  // EFFECT TRIGGERED ON EVERY SCREEN RE-LAYOUT (EXPAND-COLLAPSE) WHICH TRIGGERS THE RELEVANT SEQUENCE OF ANIMATIONS
  useEffect(() => {
    if(expanded === true){
      Animated.sequence([animateNewResButtonOpacity(0),
      Animated.delay(300),
      animateNewResFormOpacity(1)]).start()
    }
    if(expanded === false){
      Animated.sequence([animateNewResFormOpacity(0),
      Animated.delay(300),
      animateNewResButtonOpacity(1)]).start()
    }
  },[expanded])

  return (
    <ThemeConsumer>
        { ({theme}) => (
              <ScreenTransitionConsumer>
              { ({screenInFocus, toggleScreen}) => (
                  <DatesConsumer>
                    { ({currentDate}) => (
                      <>
                      <StatusBar barStyle="light-content" />
                      <GradientView theme={theme}>
                      <View style={[styles.newResContainer,{...animatedFlex}]}>
                      {
                        newResButton ? 

                        <Animated.View style={{
                          alignItems:"center",
                          opacity:newResButtonOpacity,
                          padding:spacing.screenSides, 
                          }}>
                          <TouchableOpacity 
                          style={{
                            alignItems:"center",
                            backgroundColor:colors.primaryBlack,
                            borderRadius: radii.button,
                            flexDirection:"row",
                            height:"100%",
                            justifyContent:"space-between",
                            padding:20,
                            width:"100%",
                            }} 
                            onPress={handleExpandPress}
                            >
                              <Text style={{fontSize:fontSizes.sm, fontWeight:"bold", color:colors.white}}>Create new resolutions</Text>
                              <Text style={{fontSize:fontSizes.md, fontWeight:"bold", color:colors.white}}>+</Text>
                          </TouchableOpacity>    
                        </Animated.View>

                        : null
                      }
                      
                      <Animated.View style={{opacity:newResFormOpacity, width:100, backgroundColor:"yellow"}}>
                        <TouchableOpacity style={{padding:50 }}onPress={handleCollapsePress}><Text>FORM</Text></TouchableOpacity>
                      </Animated.View>
                      </View>
                        {/* <Mock theme={theme} screenInFocus={screenInFocus} toggleScreen={toggleScreen} currentDate={currentDate} /> */}
                        <CalendarView screenInFocus={screenInFocus} navigation={navigation} currentDate={currentDate}/>
                      </GradientView>
                      </>
                    )}
                  </DatesConsumer>
              )}
            </ScreenTransitionConsumer> 
            )}
    </ThemeConsumer>

  )
}