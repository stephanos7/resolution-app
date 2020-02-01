import React, {useState, useRef} from 'react';
import {
  StyleSheet, Picker
} from 'react-native';
import {fontSizes, colors} from "../configStyles";

const styles = StyleSheet.create({
  pickerContainer : {
    height:150,
  },
  pickerItem:{
    color:colors.neonCyan,
    fontWeight:"bold",
    fontSize:fontSizes.sm
  }
  // bottomSafeArea:{
  //   flex:1,
  //   backgroundColor:colors.primaryBlack,
  // }
})


export const CustomPicker = ({items = []}) => {
  const [selectedValue, setSelectedValue] = useState("thursday")
  return (
  <Picker
    mode={"dropdown"}
    selectedValue={selectedValue}
    style={styles.pickerContainer}
    itemStyle={styles.pickerItem}
    onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}>
      {items.map( (item, index) => (
        <Picker.Item key={index} label={item} value={item.toLowerCase()} />
      ))}
  </Picker>
  )
}