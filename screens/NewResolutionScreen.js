import React from "react";
import {View, StyleSheet, Text} from "react-native"
import {GradientView} from "../components/GradientView";
import { LayoutView } from "../components/LayoutView";
import {CustomPicker} from '../components/CustomPicker';
import {CustomForm} from "../components/CustomForm";
import { FormGroup } from "../components/FormGroup";
import {CustomTextInput} from "../components/CustomTextInput";

import {ThemeContext} from "../context/Theme";

const styles = StyleSheet.create({
  pickersContainer:{
    flex:1,
    flexDirection:"row",
  }
})

export const NewResolutionScreen = ({navigation}) => {
  const days = ["Day","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const frequency = ["single", "two", "three","four"];
  const {theme} = React.useContext(ThemeContext)
  return (
    <GradientView theme={theme}>
      <LayoutView>
<Text style={{color:"red"}}>{theme}</Text>
        <CustomForm buttonTitle="Create">
          <FormGroup label="I pledge to:">
            <CustomTextInput text="hello input" />
          </FormGroup>
          <FormGroup label="I'll do this every:">
            <View style={styles.pickersContainer}>
              <View style={{flex:1}}>
                <CustomPicker items={frequency}/>
              </View>
              <View style={{flex:1}}>
                <CustomPicker items={days}/>
              </View>
            </View>
          </FormGroup>
        </CustomForm>
      </LayoutView>    
    </GradientView>
  )
}