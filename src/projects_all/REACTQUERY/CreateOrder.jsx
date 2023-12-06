import React, { useState } from 'react'
import useHookCallBackSetMethodDependecny from './useHookCallBackSetMethodDependecny'

function CreateOrder() {
  // const {filterData,onfilterChange} = useHookCallBackSetMethodDependecny()
  // console.log("data", filterData)  
  const [count, setCount] = useState(1)
  return (
    <div>CreateOrder
    {count}<br/>
    {/* {filterData?.map((item)=>item)}
   <button onClick={()=>onfilterChange("1")}>button </button>
   <button onClick={()=>setCount((prev)=>prev+1)}>increase count </button> */}

    </div>
  )
}

export default CreateOrder