import React from "react";
import {View, StyleSheet} from "react-native"
import {GradientView} from "../components/GradientView";
import { LayoutView } from "../components/LayoutView";
import {CustomPicker} from '../components/CustomPicker';
import {CustomForm} from "../components/CustomForm";
import { FormGroup } from "../components/FormGroup";
import {CustomTextInput} from "../components/CustomTextInput";

const styles = StyleSheet.create({
  pickersContainer:{
    flex:1,
    flexDirection:"row",
  }
})

export const NewResolutionScreen = ({navigation}) => {
  const days = ["Day","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const frequency = ["single", "two", "three","four"];
  return (
    <GradientView>
      <LayoutView>
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