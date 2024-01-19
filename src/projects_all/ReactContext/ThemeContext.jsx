import React, { createContext,useContext,useState } from 'react'

const ThemeContext= createContext(null)

const ThemeContextComponent = ({children}) => {
    const [theme , setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}



const useContextConsumer =()=>{
    const {context } = useContext()
    if(!context){
        throw new Error("context is null")
        
    }

    return <div>{context.theme}</div>

}
