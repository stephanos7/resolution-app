import React from "react";
import {Text} from "react-native"
import {GradientView} from "../components/GradientView";

export const LoginScreen = ({navigation}) => {

  return (
    <GradientView>
      <Text style={{color:"yellow", fontWeight:"bold"}}>LOGIN HERE!</Text>
    </GradientView>
  )
}