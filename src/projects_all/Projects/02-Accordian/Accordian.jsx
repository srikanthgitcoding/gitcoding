import React from 'react'
import { useQuery } from 'react-query'

const getCall =async ()=>{
  return await get("https://course-api.com/react-tabs-project")
}
const usegetCourseDetails=()=>{
return useQuery( {queryKey:[""],queryFn:getCall} )
}
function Accordian() {

  const {data,isLoading}= usegetCourseDetails()
  if(isLoading)<div>loading............</div>

  const dataMapping =(arr)=>{
    arr.map((courses)=>{
      return <div>{courses.title}</div>
    })
  }
  
  return (
    <div>Accordian
    <>
      {data?.data?.length ? (<div>{dataMapping()}</div>):(<div>data is not loading</div>) }
    </>
    </div>
  )
}

export default Accordian