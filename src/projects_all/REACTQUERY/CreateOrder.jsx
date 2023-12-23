import React, { useState } from 'react'
import useHookCallBackSetMethodDependecny from './useHookCallBackSetMethodDependecny'

function CreateOrder() {
  // const {filterData,onfilterChange} = useHookCallBackSetMethodDependecny()
  // console.log("data", filterData)  
  const [count, setCount] = useState(1)
  const [names, setNames] = useState({name:"a",lName:"b"})
  const changeName =()=>{
    setNames((prev)=>({...prev,name:"ss",lName:"sss"}))
  }
  console.log("create order")

  return (
    <div>CreateOrder
    {count}<br/>
    <button onClick={()=>changeName()}>changename - {names.lName}- {names.name}</button>
    {/* {filterData?.map((item)=>item)}
   <button onClick={()=>onfilterChange("1")}>button </button>
   <button onClick={()=>setCount((prev)=>prev+1)}>increase count </button> */}

    </div>
  )
}

export default CreateOrder