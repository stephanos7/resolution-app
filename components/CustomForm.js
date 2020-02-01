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
    alignItems:"center"
  }
})


export const CustomForm = ({children, buttonTitle}) => {
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
        width:"30%"
        }} 
        onPress={handleSubmit}>
        <Text style={{color:colors.neonCyan}}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
        
  </LayoutView>  
  )
}