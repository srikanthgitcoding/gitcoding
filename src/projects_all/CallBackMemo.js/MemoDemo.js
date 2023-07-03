import React, { useCallback, useMemo, useState } from 'react'
import MemoDemoChild from './MemoDemoChild'

function slowFunction(count){
    return 2
    let j = count;
    for(let i=0;i<1000000000;i++){
         j = j+i
    }
    return j
}
function MemoDemo() {
    console.log("memo demo")
    const [count, setcount] = useState(0)
    const [todos, settodos] = useState([])
    
    const sl = useMemo(()=>{
        return slowFunction(count)
    },[count])

    const todoUpdate = useCallback(() =>{
        settodos((c)=> [...c, "newTodod"])
    },[todos])

  return (
    <div>
    <div>slow value - {sl}</div>
        <MemoDemoChild todos={todos} todoUpdate={todoUpdate}></MemoDemoChild>
        <div>{count}</div>
        <button onClick={()=>setcount(c => c + 1)}>increment button</button>
    </div>
  )
}

export default MemoDemo