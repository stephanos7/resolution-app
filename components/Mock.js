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
  const [newResButton, setNewResButton] = useState(true);
  const expandNewResolution = () => setExpanded(true);
  const collapseNewResolution = () => setExpanded(false);
  const mountNewResButton = () => setNewResButton(true);
  const unmountNewResButton = () => setNewResButton(false);

  const [newResButtonOpacity, setFafeOpacity] = useState(new Animated.Value(1))
  const [newResFormOpacity, setAppearOpacity] = useState(new Animated.Value(0))


  const animatedFlex = (expanded ? {flex:12}: {flex:1})

  
  // useEffect(() => {
  //   screenInFocus === "Calendar" ? toggleFlex({flex:1}) : screenInFocus === "NewResolution" ? toggleFlex({flex:12}) : null
  // }, [screenInFocus])
  const animateNewResButtonOpacity = (value) => Animated.timing(
    newResButtonOpacity,
    {
      toValue: value,
      duration:100,
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

  const handleExpand = () => {
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

  const handleCollapse = () => {
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
  console.log("BUTTON MOUNTED?", newResButton)
  return(
    <View style={[styles.newResContainer,{...animatedFlex}]}>
    
    {newResButton ? 

    <Animated.View style={{opacity:newResButtonOpacity, width:100, backgroundColor:"pink"}}>
    <TouchableOpacity style={{padding:20}} onPress={handleExpand}><Text>NEW RES</Text></TouchableOpacity>    
    </Animated.View>
    
    : null
    }

    <Animated.View style={{opacity:newResFormOpacity, width:100, backgroundColor:"yellow"}}>
    <TouchableOpacity style={{padding:50 }}onPress={handleCollapse}><Text>FORM</Text></TouchableOpacity>
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
          
          </View>)


    {/* <TouchableOpacity
    onPress={handlePress} style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center", padding:spacing.md, borderBottomRightRadius:radii.lg, borderBottomLeftRadius:radii.lg}}>
<Text style={{color:colors.white, fontWeight:"bold", fontSize:fontSizes.sm}}>{screenInFocus}Create new resolution</Text>
</TouchableOpacity> */}


}