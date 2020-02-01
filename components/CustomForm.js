import React, {useState} from 'react';
import {
  StyleSheet, Button, View
} from 'react-native';
import { LayoutView } from './LayoutView';

const styles = StyleSheet.create({
  formContainer : {
    flex:1,
  },
  buttonStyle:{
    backgroundColor:"white"
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
    <Button title={buttonTitle} style={styles.buttonStyle} onPress={handleSubmit}/>
  </LayoutView>  
  )
}