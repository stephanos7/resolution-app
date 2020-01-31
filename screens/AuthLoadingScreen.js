import React, {useEffect, useState} from "react";
import {Text, Button} from "react-native"
import {ScreenView} from "../components/ScreenView";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure();

export const AuthLoadingScreen = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const handleLoggedIn = (theIsLoggedIn) => {
    if(isLoggedIn){
      return navigation.navigate("Calendar",{user:"stephos"})
    }
  }

  useEffect(() => {
    handleLoggedIn(isLoggedIn)
  }, [isLoggedIn])

  console.log(JSON.stringify(user))
  return (
    <ScreenView>
      <Text style={{color:"white", fontWeight:"bold"}}>LOADING SCREEN. Checking if user is logged-in</Text>
      {/* <Button onPress={signIn} title="Login" color={"blue"} /> */}
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress} 
        />
<Text style={{color:"white", fontWeight:"bold"}}>{JSON.stringify(user)}</Text>
    </ScreenView>
  )
}