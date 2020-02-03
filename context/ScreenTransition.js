import React, {useState} from "react";

const {Provider, Consumer} = React.createContext();

const ScreenTransitionProvider = ({children}) => {
  const [screenInFocus, setScreenInFocus] = useState("Calendar");
  const transitionScreen = screen => setScreenInFocus(screen);

  return(
    <Provider value={{screenInFocus,transitionScreen}}>
      {children}
    </Provider>
  )
}

export { ScreenTransitionProvider, Consumer as ScreenTransitionConsumer}