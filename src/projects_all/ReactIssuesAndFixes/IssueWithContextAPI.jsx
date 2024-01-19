import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext("this ")
const IssueWithContextAPI = () => {
    const [count,setCount]= useState(0)
    
  return (
    <div>
    <CountContext.Provider value={{count, setCount}} >
      <Example1 />
      <Example2 />
      </CountContext.Provider>
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
export default IssueWithContextAPI

//issue here is I am consuming usecontext in example 1 howver whenever there is change in context this.state.
//it rerender entire tree like examplke 2 component as well 
// we dont want that so we have to find other ways