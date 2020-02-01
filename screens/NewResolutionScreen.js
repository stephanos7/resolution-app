import React from "react";
import {Picker, View, TouchableOpacity, Text} from "react-native"
import {ScreenView} from "../components/ScreenView";

export const NewResolutionScreen = ({navigation}) => {
  // const getCurrentDateFromTheDateSelectedOnCalendar = navigation.getParam('day', 0)
const handlePress = () => console.log("yo who scrolled?")
  return (
    <ScreenView>
      <Text style={{color:"white"}}>PICCKKK</Text>
      <View  style={{flex:1}}>
      <Picker
      onChange={handlePress}
      mode={"dropdown"}
  selectedValue={"Java"}
  style={{height: 50, width: 100}}
  // onValueChange={
  //   (itemValue, itemIndex) =>
  //   this.setState({language: itemValue})
  // }
  >
  <Picker.Item     
 label="Day" value="Day" />
 <Picker.Item label="Monday" value="monday" />
 <Picker.Item label="Tuesday" value="tuesday" />

 <Picker.Item label="Wednesday" value="wednesday" />
 <Picker.Item label="Thursday" value="thursday" />

 <Picker.Item label="Friday" value="friday" />
 <Picker.Item label="Saturday" value="saturday" />

 <Picker.Item label="Sunday" value="sunday" />

</Picker>
      </View>
     
    </ScreenView>
  )
}