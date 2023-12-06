import React, { useEffect, useState } from 'react'
import CurryFunction from './CurryFunction'

function SetStateExample() {
    console.log("SetStateExample")
    const [count, setCount] = useState(0)
    const increment = () =>{
        //scenario1
        // setCount(count + 1) // here it inctemnt by 1 and count is 1 
        // console.log(count)// here u get prevuous value which is 0 because setstae is async call
        //scenario 2
        // setCount((c)=> c+ 1) // increment by 1
        // console.log(count) // print zero
        //scenario 3
        setCount((c)=> c+ 1) // increses by 1 and  count is 1
        setCount((c)=> c+ 1) // increses by 1 and count is 2
         //scenario 4
        // setCount(count+ 1) // increses by 1 and  count is 1
        // setCount(count+ 1) // increses by 1 and count is 1

    }
    useEffect(() => {
         
      console.log("useEffect log", count)
    }, [count])
    
  return (
    <div>
    {count}
    <button onClick={increment}>count set</button>
    <CurryFunction></CurryFunction>
    </div>
  )
}

export default SetStateExample