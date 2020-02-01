import React, {useState, useRef} from 'react';
import {
  StyleSheet, Picker
} from 'react-native';
import {spacing, colors} from "../configStyles";

const styles = StyleSheet.create({
  pickerContainer : {
    height:150,
  },
  pickerItem:{
    color:colors.neonCyan,
    fontWeight:"bold",
  }
  // bottomSafeArea:{
  //   flex:1,
  //   backgroundColor:colors.primaryBlack,
  // }
})


export const CustomPicker = props => {
  const [selectedValue, setSelectedValue] = useState("thursday")
  const checkIfSelected = (nameOfDay, selected) => nameOfDay === selected ? true : false
  const handlePress = () => console.log("yo who scrolled?")
  return (
  <Picker
    onChange={handlePress}
    mode={"dropdown"}
    selectedValue={selectedValue}
    style={styles.pickerContainer}
    itemStyle={styles.pickerItem}
    onValueChange={
      (itemValue, itemIndex, itemSelected) =>{
        console.log("is selected>", itemSelected)
      return setSelectedValue(itemValue)}
    }
    >
    <Picker.Item  label="Day" value="day" />
    <Picker.Item  label="Monday" value="monday" />
    <Picker.Item  label="Tuesday" value="tuesday"/>
    <Picker.Item  label="Wednesday" value="wednesday"  />
    <Picker.Item  label="Thursday" value="thursday"  />
    <Picker.Item  label="Friday" value="friday"  />
    <Picker.Item  label="Saturday" value="saturday"  />
    <Picker.Item  label="Sunday" value="sunday"  />
  </Picker>
  )
}