// import React, { useState } from 'react'

// function EffectMistakes({age}) {
//   const [name, setname] = useState()

//     console.log("EffectMistakes",age)
//   return (
//     <div>EffectMistakes
//     <>
//       <input value={name} onChange={(e)=> setname(e.target.value ) }></input>
//     </>
//     </div>
//   )
// }

// export default EffectMistakes
// the above code throws this error - A component is changing an uncontrolled input to be controlled.
// to resolve -   const [name, setname] = useState("change her to an empty string")

import React, { useEffect, useState, useMemo } from 'react'

function EffectMistakes({age}) {
  const [name, setname] = useState("")
  const [darkTheme, setdarkTheme] = useState(true)
  const user = useMemo(() => {
    return { name, age}
  }, [name,age])
  
    const styling = {
      backgroundColor : darkTheme ? "red" : "black",
      color : darkTheme ? "black" : 'red'
    }
   useEffect(() => {
     console.log("user", name)
   }, [user])
    

  return (
    <div>EffectMistakes
    <>
      <input value={name} onChange={(e)=> setname(e.target.value ) }></input>
      <button style={styling} onClick={()=>setdarkTheme(!darkTheme)}>ToggleMe</button>
    </>
    </div>
  )
}

export default EffectMistakes