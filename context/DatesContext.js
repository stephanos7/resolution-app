import React, { useState, useEffect } from "react";
import { getCurrentDate } from "../utils/dateHelpers";

const {Provider, Consumer} = React.createContext();

const DatesProvider = ({children}) => {
  const [currentDate, setCurrentDate] = useState();
  

  useEffect(() => {
    const now = getCurrentDate()
    setCurrentDate(now);
  }, [])
  
  return (
    <Provider value={{currentDate}}>
      {children}
    </Provider>
  )
}

export  {DatesProvider, Consumer as DatesConsumer}



