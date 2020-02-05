import React,{useState, useEffect} from "react";
import { 
  Platform,
  NativeModules,
  LayoutAnimation,
  Text,
  View,
  Animated,
  TouchableOpacity,
  StyleSheet
} 
from "react-native";
import { GradientView } from "./GradientView";
import { LayoutView } from './LayoutView';
import { FormGroup } from "./FormGroup";
import {CustomForm} from './CustomForm';
import { CustomTextInput } from "./CustomTextInput";
import {CustomPicker} from './CustomPicker';
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
  pickersContainer:{
    flex:1,
    flexDirection:"row",
  },
  newResContainer : {
    backgroundColor:"transparent",
    paddingBottom:spacing.md,
  }
})

export const Mock = ({theme, screenInFocus, currentDate, toggleScreen}) => {
  const days = ["Day","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const frequency = ["single", "two", "three","four"];
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = (expanded) => setExpanded(!expanded);
  const animatedHeight = new Animated.Value(100)
  const fadeOpacity = new Animated.Value(1)
  const appearOpacity = new Animated.Value(0)


  const animatedFlex = (expanded ? {flex:12}: {flex:1})

  
  // useEffect(() => {
  //   screenInFocus === "Calendar" ? toggleFlex({flex:1}) : screenInFocus === "NewResolution" ? toggleFlex({flex:12}) : null
  // }, [screenInFocus])
  const fadeAnimation = () => Animated.timing(
    fadeOpacity,
    {
      toValue: 0,
      duration:100,
      useNativeDriver: true
    },
  )

  const appearAnimation = () => Animated.timing(
    appearOpacity,
    {
      toValue: 1,
      duration:300,
      useNativeDriver: true
    },
  )

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(
      // duration
      600,
      // type
      LayoutAnimation.Types.timing,
      // creation prop
      LayoutAnimation.Properties.scaleY,
    )
     // callback on end
    )
    toggleExpanded();
  }

  useEffect(() => {
    if(expanded){
      Animated.sequence([fadeAnimation(),
      Animated.delay(3000),
      appearAnimation()]).start()
    }
  }, [expanded])

  return(
    // <View style={{flex}}>
    <View style={[styles.newResContainer,{...animatedFlex}]}>
    
    <Animated.View style={{opacity:fadeOpacity, width:100, backgroundColor:"pink"}}>
    <TouchableOpacity onPress={handlePress}><Text>click me</Text></TouchableOpacity>    
    </Animated.View>

    <Animated.View style={{opacity:appearOpacity, width:100, backgroundColor:"yellow"}}>
      <Text>i will appear</Text>
    </Animated.View>

{/* <CustomForm buttonTitle="Create">
            <FormGroup label="I pledge to:">
              <CustomTextInput text="hello input" />
            </FormGroup>
            <FormGroup label="I'll do this every:" size="medium">
              <View style={styles.pickersContainer}>
                <View style={{flex:1}}>
                  <CustomPicker items={frequency}/>
                </View>
                <View style={{flex:1}}>
                  <CustomPicker items={days}/>
                </View>
              </View>
            </FormGroup>
          </CustomForm> */}
          <TouchableOpacity 
          
          style={{backgroundColor:"blue", padding:20}}>
            <Text>CLOSE ME!!</Text>
          </TouchableOpacity>
          </View>)


    {/* <TouchableOpacity
    onPress={handlePress} style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center", padding:spacing.md, borderBottomRightRadius:radii.lg, borderBottomLeftRadius:radii.lg}}>
<Text style={{color:colors.white, fontWeight:"bold", fontSize:fontSizes.sm}}>{screenInFocus}Create new resolution</Text>
</TouchableOpacity> */}


}