import React from "react";
import {View, Text} from "react-native";
import { Animated } from 'react-native';

export const Mock = ({screenInFocus}) => (
  <Animated.View style={{height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15, backgroundColor:"green"}}>
    <Text style={{color:"red"}}>this is focused: {screenInFocus}</Text>
  </Animated.View>
)