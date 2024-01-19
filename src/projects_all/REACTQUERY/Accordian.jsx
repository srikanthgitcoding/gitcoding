import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import uuid from 'react-uuid'
import './index.css'


const getCall =async ()=>{
  return await axios.get("https://course-api.com/react-tabs-project")
}
const useGetCourseDetails=()=>{
return useQuery({queryKey:[""],queryFn:getCall} )
}

const ChildAccordian =({dutie})=>{
    const [isOpen,setIsOpen]=useState(false)
    const showData =()=>{
        setIsOpen(!isOpen)
    }
    return (
    <div >{dutie} <button onClick={showData}>{isOpen ? "show child" :"hide child"}</button>  
    <div>{isOpen && <>I am sample text</>}</div></div>)
}

function Title({courses}){
    const [showData,setShowData]= useState(true)
    const classNames = showData ? "show" :"hide"
    const setShow =()=>{
        setShowData(!showData)
    }
    return (<><div >{courses.title} <button onClick={setShow}>{!showData ? "show" : "hide"}</button></div>
    {showData && courses.duties.map((item)=> <ChildAccordian key={item} dutie={item}/>)}
    </>)
}

function Accordian() {

  const {data,isLoading}= useGetCourseDetails()
  if(isLoading)<div>loading............</div>

  const dataMapping =(arr)=>{
    
    return arr.map((courses)=>{
      return (<div key={uuid()}>
      <Title courses={courses}></Title>
      </div>)
    })
  }
  
  return (
    <div>Accordian
    <>
      {data?.data?.length ? (<div>{dataMapping(data.data)}</div>):(<div>data is not loading</div>) }
    </>
    </div>
  )
}

export default Accordian