import React from 'react'
// import axios from 'axios'

import { useState } from "react"

// function Child() {

//   const fn = async = () =>{
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     let jsonres = await res.json()
//     console.log(jsonres)
//   }  
//   return (
//     <div>Child</div>
//   )
// }

// export default Child


function useChild(init){

  const [count, setCount] = useState(init)
  const changeCount = () =>{
    setCount((prev)=>prev +1)
  }
  return [count, changeCount]
}

export default useChild