import React,{useState, useEffect} from "react";
import { 

} 
from "react-native";
import { GradientView } from "./GradientView";
import { LayoutView } from './LayoutView';
import { FormGroup } from "./FormGroup";
import {CustomForm} from './CustomForm';
import { CustomTextInput } from "./CustomTextInput";
import {CustomPicker} from './CustomPicker';




const styles = StyleSheet.create({
  pickersContainer:{
    flex:1,
    flexDirection:"row",
  },

})

export const Mock = ({theme, screenInFocus, currentDate, toggleScreen}) => {
  const days = ["Day","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const frequency = ["single", "two", "three","four"];





  
  // useEffect(() => {
  //   screenInFocus === "Calendar" ? toggleFlex({flex:1}) : screenInFocus === "NewResolution" ? toggleFlex({flex:12}) : null
  // }, [screenInFocus])

  

  return(

    




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
          


    {/* <TouchableOpacity
    onPress={handlePress} style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center", padding:spacing.md, borderBottomRightRadius:radii.lg, borderBottomLeftRadius:radii.lg}}>
<Text style={{color:colors.white, fontWeight:"bold", fontSize:fontSizes.sm}}>{screenInFocus}Create new resolution</Text>
</TouchableOpacity> */}


}