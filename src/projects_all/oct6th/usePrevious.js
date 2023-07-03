import React, { useState } from 'react'

function usePrevious(val) {
    const [first, setfirst] = useState(val)
    const fn =() =>{
        setfirst((prev)=>prev + 1)
    }
    console.log(first)
  return [first,fn]
}

export default usePrevious