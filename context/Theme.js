import React, {useState} from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = theme => theme === "Dark" ? setTheme("Light") : setTheme("Dark");

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}