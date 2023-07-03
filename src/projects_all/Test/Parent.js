import React, { useCallback, useMemo, useState } from 'react'
import ChildTest from './ChildTest'
import ChildTest2 from './ChildTest2'


function Parent(){

  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([])
  const changeCount = ()=>{
    setCount(prev => prev+1)
  }
  const callMe = useMemo(() =>{
    console.log("call me")
    for(var i=0;i<10000000000;i++){

    }
  },count)
  
  const increaseArr = useCallback(() =>{
    setArr(prev => [...prev, "new1"])
  },[arr])

  return (
    <div>
    <ChildTest2 arr={arr} increaseArr={increaseArr}></ChildTest2>
    <div>{count} - {callMe}</div>
    <button onClick={changeCount}>click me to change </button>
    </div>
  )
}

export default Parent