import React, {useEffect, useState} from "react";
import {Text} from "react-native"
import {GradientView} from "../components/GradientView";

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
    <GradientView>
      <Text style={{color:"white", fontWeight:"bold"}}>LOADING SCREEN. Checking if user is logged-in</Text>
    </GradientView>
  )
}