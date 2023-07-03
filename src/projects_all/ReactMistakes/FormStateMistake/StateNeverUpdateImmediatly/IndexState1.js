import React, { useState } from 'react'

function IndexState1() {
  console.log("IndexState1")
    const [value, setValue] = useState(0)
    
    const changeValue = (v)=>{
        // setValue(value + v)
        // setValue(value + v)
        setTimeout(()=>{
          setValue((prev)=>prev + v)
        },4000)
        setValue((prev)=>prev + 5)
        console.log("console",value)

    }
    
  return (
    <div>IndexState
        <button onClick={()=>changeValue(-1)}>-</button>
        {value}
        <button onClick={()=>changeValue(1)}>+</button>
    </div>
  )
}

export default IndexState1