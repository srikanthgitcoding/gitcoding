// import React, { useState } from 'react'

// function useToggle(defaultValue) {
//     const [value, setvalue] = useState(defaultValue)
//     const toggleIt = (val) =>{
//         return setvalue(typeof val === "boolean" ? val : !value)
//     }
//     return [value,toggleIt]
// }

// export default useToggle

import React, { useState, useEffect } from 'react'

function useToggle(defaultValue) {
    console.log("use toggle - custom hook rendering",defaultValue)
    const [first, setfirst] = useState(defaultValue)
    console.log("use toggle - state",first)
    const changeValue = (value) =>{
        console.log("use toggle - custom hook method")
         setfirst((pre) =>typeof value === 'boolean' ? value :!pre )
    }
    useEffect(() => {
      console.log("useToggle - useEffect", first)
    }, [first])
    
  return [first,changeValue]
}

export default useToggle







































