import React,{useState, useEffect} from "react";
import {  
  Platform,
  NativeModules,
  LayoutAnimation,
  Text,
  View,
  TouchableOpacity} 
from "react-native";

const { UIManager } = NativeModules;  

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}


export const Mock = ({screenInFocus, toggleScreen}) => {
  const [flex, setFlex] = useState(12);
  const toggleFlex = () => flex === 1 ? setFlex(12) : setFlex(1);
  const handlePress = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        // duration
        500,
        // type
        LayoutAnimation.Types.timing,
        // creation prop
        LayoutAnimation.Properties.scaleY,
      ))
      toggleFlex();
      // add callback on end
      // () => alert("finished...")
  }

  useEffect(() => {
    toggleScreen()
  }, [flex])

  return(
  <View style={{flex, justifyContent:"center", alignItems:"center", borderBottomLeftRadius:15, borderBottomRightRadius:15, backgroundColor:"green"}}>
    <TouchableOpacity 
      onPress={handlePress}
      style={{width:"40%",padding:10, backgroundColor:"lightblue"}}
      >
      <Text style={{color:"red"}}>this is focused: {screenInFocus}</Text>
    </TouchableOpacity> 
  </View>
)}