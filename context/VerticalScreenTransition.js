import React, {useState, Component} from "react";

export const VerticalScreenTransitionContext = React.createContext();

export const VerticalScreenTransitionProvider = ({children}) => {
  const [screenInFocus, setScreenInFocus] = useState("Calendar");
  const transitionScreens = screen => setScreenInFocus(screen);

  return(
    <VerticalScreenTransitionContext.Provider render={ value => (
        <Component value={{screenInFocus,transitionScreens}}/>
      )
    }
    />
  )
}