import React, {useState} from "react";

const {Provider, Consumer} = React.createContext();

const ScreenTransitionProvider = ({children}) => {
  const [screenInFocus, setScreenInFocus] = useState("Calendar");
  const toggleScreen = () => screenInFocus === "Calendar" ? setScreenInFocus("NewResolution") : setScreenInFocus("Calendar");

  return(
    <Provider value={{screenInFocus,toggleScreen}}>
      {children}
    </Provider>
  )
}

export { ScreenTransitionProvider, Consumer as ScreenTransitionConsumer}