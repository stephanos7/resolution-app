import React, {useState} from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text
} from 'react-native';
import { LayoutView } from './LayoutView';
import { colors, radii } from "../configStyles";

const styles = StyleSheet.create({
  formContainer : {
    flex:1,
  },
  buttonsContainer: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-around"
  }
})


export const CustomForm = ({children, submitButtonTitle="Submit", cancelButton=false }) => {
  const [data, setData] = useState()
  const handleSubmit = () => console.log("submitted")
  return (
  <LayoutView>
    <View style={styles.formContainer}>
      {children}
    </View>

    {/* MAKE COMPONENTS */}
    <View style={styles.buttonsContainer}>
      <TouchableOpacity 
        style={{
        borderWidth:1,
        borderColor:colors.neonCyan,
        borderRadius:radii.button,
        display:"flex",
        alignItems:"center",
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:20,
        paddingRight:20,
        }} 
        onPress={handleSubmit}>
        <Text style={{color:colors.neonCyan}}>
          {submitButtonTitle}
        </Text>
      </TouchableOpacity>
      { 
        cancelButton ? 
          (<TouchableOpacity 
              style={{
              borderWidth:1,
              borderColor:colors.red,
              borderRadius:radii.button,
              display:"flex",
              alignItems:"center",
              paddingTop:15,
              paddingBottom:15,
              paddingLeft:20,
              paddingRight:20,
              }} 
              onPress={handleSubmit}>
              <Text style={{color:colors.red}}>
                Cancel
              </Text>
            </TouchableOpacity>)
            :
          null
        }
    </View>
        
  </LayoutView>  
  )
}