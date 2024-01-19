import React, { createContext, useContext, useState } from 'react'

type themeProps ={
    children:React.ReactNode
}

type thmes = "light" | "dark"
type themeContextProps= {
theme:thmes,
setTheme: React.Dispatch<React.SetStateAction<thmes>>
}

const Themecontext = createContext<themeContextProps | null>(null)

const TehemeContext1 = ({children}:themeProps) => {
    const [theme, setTheme] = useState<thmes>("dark")

  return (
    <Themecontext.Provider value={{theme,setTheme}}>
      {children}
    </Themecontext.Provider>
  )
}

const useConextConsumer =()=>{
    const context = useContext(Themecontext)
    if(context){
        throw new Error("please acees it with in the context provider")
    }
    return {context}
}