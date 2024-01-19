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
    },[count]) //when count value changes slowFunction gets executed else it returns prev value

    const todoUpdate = useCallback(() =>{
        settodos((c)=> [...c, "newTodod"])
    },[todos])

    //points 
    // memodemoChild render happens when todos changes
    //2) or when todoupdate method re created, and it gets re cretaed wheneevr there is change in todos value
    //3) if u dont wrap todoUpdate method in usecallback evry time components re render due to a state change a function ref gets created and 
    //which in turn result in component re render to avoid that we wrap with usecallback

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