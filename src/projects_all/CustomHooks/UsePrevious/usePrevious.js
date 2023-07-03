import React, { useState } from 'react'

function usePrevious(val) {
    const [count, setcount] = useState(val)
    const setIt = () =>{
        setcount(c => c + 1)
    }
  return [count, setIt]
}

export default usePrevious