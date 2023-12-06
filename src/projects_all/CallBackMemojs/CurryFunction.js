// import React from 'react'

// function CurryFunction() {
//   const callMe = (e,v) =>{
//       console.log("---", e, v)
//   }  
//   return (
//     <div>CurryFunction
//     <input type="text" onChange={(e)=>callMe(e,1)}></input>
//     </div>
//   )
// }

// export default CurryFunction

import React, { useState } from 'react'

function CurryFunction() {
  const [,set] = useState("")
  const callMe = (number) =>{

      return (event) => console.log("number and event", number, event) // inner function handles event
  }  
  const handleClick = (item) => (event) =>{
      console.log("item", item, event)
  }
  const handleClick1 = (i) => () =>{
      console.log("#######", i)
  }
  return (
    <div>CurryFunction    <input type="text" onChange={callMe(1)}/>

    <button onClick={handleClick(1)}>clcik me  button</button>
    <button onClick={handleClick1(1)}>clcik me 1 button</button>

    </div>
  )
}

export default CurryFunction