import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import uuid from 'react-uuid'


const getCourses=async()=>{
    return await axios.get("https://course-api.com/react-tabs-project")
}
const useGetCourses =()=>{
    return useQuery({queryKey:[""],queryFn:getCourses})
}
const TabsPractice = () => {
    const {data,isLoading} =useGetCourses()
    const [selectObj,setSelectObj] = useState(0)
    console.log("loading", isLoading, data)
if(isLoading)<div>isLoading</div>

const {title} = data?.data[selectObj] ?? ""

console.log("-----",title)
  return (
    <div style={{display:'flex',flexDirection:" row-reverse",width:"200px"}}>
      {
        data?.data?.length ? data.data.map((item,index)=><button key={uuid()} type="button" onClick={()=>setSelectObj(index)}>{item.order}</button>):<div>data is not available</div>
      }
      <div>{title}</div>
    </div>
  )
}

export default TabsPractice
