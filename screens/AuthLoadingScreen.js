import React, {useEffect, useState} from "react";
import {Text} from "react-native"
import {ScreenView} from "../components/ScreenView";

export const AuthLoadingScreen = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoggedIn = (theIsLoggedIn) => {
    if(isLoggedIn){
      return navigation.navigate("Calendar",{user:"stephos"})
    }else{
      return navigation.navigate("Login")
    }
  }

  useEffect(() => {
    handleLoggedIn(isLoggedIn)
  }, [isLoggedIn])

  return (
    <ScreenView>
      <Text style={{color:"white", fontWeight:"bold"}}>LOADING SCREEN. Checking if user is logged-in</Text>
    </ScreenView>
  )
}