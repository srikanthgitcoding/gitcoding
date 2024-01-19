import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext("this ")
const ContContextProvider =({children})=>{
    const [count,setCount]= useState(0)
    return <CountContext.Provider value={{count, setCount}} >
    {children}
    </CountContext.Provider>
}

const FixIssueWithContextAPI = () => {
    
  return (
    <div>
    <ContContextProvider>
      <Example1 />
      <Example2 />
      </ContContextProvider>
    </div>
  )
}


export const Example1 = () => {
    console.log("Example 1")
    const {count,setCount} = useContext(CountContext)
    return (
      <div>
      {count}
      <button onClick={()=>setCount((prev)=>prev+1)}>clime </button>
        Example 1 
      </div>
    )
  }

  export const Example2 = () => {
    console.log("Example 2")

    return (
      <div>
        Example 2
      </div>
    )
  }
export default FixIssueWithContextAPI

// step 1 add context provider in differnt componet 
// pass all component that needs to access this data as children to this component like above
//