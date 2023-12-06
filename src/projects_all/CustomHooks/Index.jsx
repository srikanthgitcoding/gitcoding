import React,{useState} from 'react'
import useFilterNo from './hooksWithOutOptmization/useFilterNo'
import useFilter from  './hooksWithOptmization/useFilter.js'


function CustomHookOptimization() {
   const {filter,onFilterChange}= useFilterNo()
   const {filterOpt,onFilterChangeOpt}= useFilter()

   
   const [count, setCount] = useState(1)
  return (
    <div>CustomHookOptimization
    {count}
        {filter?.map((item)=>item)}
        <button onClick={()=>onFilterChange("new")}>button</button>
        <button onClick={()=>setCount((prev)=>prev + 1)}>count</button>
        <br/><br/>
        {filterOpt?.map((item)=>item)}
        <button onClick={()=>onFilterChangeOpt("opt")}>opt button</button>
    </div>
  )
}

export default CustomHookOptimization