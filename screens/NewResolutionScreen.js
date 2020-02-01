import React from "react";
import {Picker} from "react-native"
import {GradientView} from "../components/GradientView";
import { LayoutView } from "../components/LayoutView";
import {CustomPicker} from '../components/CustomPicker';
import {CustomForm} from "../components/CustomForm";
import { FormGroup } from "../components/FormGroup";
import {CustomTextInput} from "../components/CustomTextInput";

export const NewResolutionScreen = ({navigation}) => {
  return (
    <GradientView>
      <LayoutView>
        <CustomForm buttonTitle="Create">
          <FormGroup label="I pledge to:">
            <CustomTextInput text="hello input" />
          </FormGroup>
          <FormGroup label="I'll do this:">
            <CustomPicker />
          </FormGroup>
        </CustomForm>
      </LayoutView>    
    </GradientView>
  )
}