
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider =({children})=>{
  const [theme, setTheme] = useState(false)

  function handleTheme(){
    if(theme){
        setTheme(false)
    }else{
        setTheme(true)
    }
  }
    return(
        <AppContext.Provider value={{theme, handleTheme}} >
            {children}
        </AppContext.Provider>
    )
}