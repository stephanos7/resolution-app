import React, {useState} from "react";

const {Provider, Consumer} = React.createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("Dark");
  const toggleTheme = theme => theme === "Dark" ? setTheme("Light" ):  setTheme("Dark");
  
  return (
    <Provider value={{theme, toggleTheme}}>
      {children}
    </Provider>
  )
}

export  {ThemeProvider, Consumer as ThemeConsumer}