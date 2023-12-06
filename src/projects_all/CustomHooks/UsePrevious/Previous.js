import React, { useState, useRef } from 'react'
import usePrevious from './usePrevious'

function Previous() {
let defau = 0
const [count, setIt] = usePrevious(defau)
const prev = useRef()

// const increment = (value) =>{
//     prev.current = count
//     setcount(prev => prev + 5)
// }
var arr = []
arr.push

  return (
    <div>Previous count - {prev.current}- current count - {count} 
    <button onClick={setIt}>increment</button>
    </div>
  )
}

export default Previous
