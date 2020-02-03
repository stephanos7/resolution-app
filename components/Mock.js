import React from "react";
import {View, Text} from "react-native";
import { Animated } from 'react-native';

export const Mock = props => (
  <Animated.View style={{height:100, borderBottomLeftRadius:15, borderBottomRightRadius:15, backgroundColor:"green"}}>
    <Text style={{color:"red"}}>PLACEHOLDER</Text>
  </Animated.View>
)