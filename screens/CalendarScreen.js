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
import { FormGroup } from "../components/FormGroup";
import { CustomForm } from '../components/CustomForm';
import { CustomTextInput } from "../components/CustomTextInput";
import { CustomPicker} from '../components/CustomPicker';


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
  //MOCK DATA
  const days = ["Day","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const frequency = ["single", "two", "three","four"];
  //MOCK DATA END

  // checks whether the screen is expanded during the animation
  const [expanded, setExpanded] = useState(false);

  // checks IF the components are mounted or unmounted
  const [newResButtonAndCalendarView, setNewResButtonAndcalendarView] = useState({newResButton:true, calendarView:true});

  // changes the opacity of the New Res Button during the animation
  const [calendarViewOpacity, setCalendarViewOpacity] = useState(new Animated.Value(1))

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
  const unmountNewResButtonAndCalendarView = () => setNewResButtonAndcalendarView({newResButton:false, calendarView:false});

  // mounts the New Res Button on the DOM after the screen is collapsed during the animation
  const mountCalendarView = () => setCalendarView(true);

  // unmounts the New Res Button on the DOM after the screen is collapsed during the animation
  const unmountCalendarView = () => setCalendarView(false);

  // the flex style property to animate the screen layout during expand/collapse phase of the animation
  const animatedFlex = (expanded ? {flex:15}: {flex:1})


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

  const animateCalendarViewOpacity = (value) => Animated.timing(
    calendarViewOpacity,
    {
      toValue: value,
      duration:300,
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
     () => unmountNewResButtonAndCalendarView()
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
      Animated.sequence([
        animateNewResButtonOpacity(0),
        Animated.delay(300),
        animateCalendarViewOpacity(0),
        animateNewResFormOpacity(1),
      ]).start()
    }
    else if(expanded === false){
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
                            newResButtonAndCalendarView.newResButton ? 

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

                          <Animated.View style={{opacity:newResFormOpacity, flex:1}}>
                            {/* CREATE NEW RESOLUTION FORM */}
                            <CustomForm cancelButton={false} submitButtonTitle="Create">
                              <View style={{flex:1}}>
                                <FormGroup label="I pledge to:">
                                  <CustomTextInput text="hello input" />
                                </FormGroup>
                              </View>
                              <View style={{flex:2}}>
                                <FormGroup label="I'll do this every:" size="medium">
                                    <View style={{flex:1,flexDirection:"row"}}>
                                      <View style={{flex:1}}>
                                        <CustomPicker items={frequency}/>
                                      </View>
                                      <View style={{flex:1}}>
                                        <CustomPicker items={days}/>
                                      </View>
                                    </View>
                                </FormGroup>
                              </View>
                            </CustomForm> 
                            {/* END OF CREATE NEW RESOLUTION FORM */}
                          </Animated.View>
                      
                        </View>

                        {
                          newResButtonAndCalendarView.calendarView ?
                          (<Animated.View style={{opacity:calendarViewOpacity, flex:3}}>
                            <CalendarView navigation={navigation} currentDate={currentDate}/>
                          </Animated.View>)
                          :
                            (<Text style={{fontSize:fontSizes.md, fontWeight:"bold", color:colors.white}}>Calendar</Text>)
                        }
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