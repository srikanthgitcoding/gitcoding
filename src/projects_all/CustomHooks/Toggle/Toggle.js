// import React, { useState } from 'react'
// import useToggle from './useToggle'

// function Toggle() {
//   let defaultValue = false
//   const [toggle, setToggle] = useToggle(defaultValue)

//   // const toggleIt = (value) => {
//   //   console.log("toggleIt")
//   //   setToggle(pre => typeof value === 'boolean' ? value : !pre)
//   // }

//   return (
//     <div>Toggle is {toggle.toString()}
//     <button onClick={setToggle}>Toggle</button>
//     <button onClick={() =>setToggle(true)}>Toggle True</button>
//     <button onClick={() =>setToggle(false)}>Toggle False</button>
//     </div>
//   )

// }

// export default Toggle

import React, { useState } from 'react'
import useToggle from './useToggle'

function Toggle() {
  console.log("toggle component rendering")

  const [first,changeValue] = useToggle(false)
  return (
    <div>
    <>{first.toString()}</>
      <button onClick={changeValue}>Toggle </button>
      <button onClick={() => changeValue(true)}>True</button>
      <button onClick={() => changeValue(false)}>False</button>
    </div>
  )
}

export default Toggle