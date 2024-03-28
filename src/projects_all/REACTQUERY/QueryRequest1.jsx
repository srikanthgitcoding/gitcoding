import React, { useState,useMemo } from 'react'
import useQueryRequest from './useQueryRequest'
import Child1 from './Child1'

const QueryRequest1 = () => {

  const [first, setfirst] = useState(0)
const {data,isLoading}= useQueryRequest(true)
if(isLoading)<div>is Loading....</div>

const response = data?.data ?? []


  return (
    <div>
      QueryRequest1
      <button onClick={()=>setfirst(first+1)}>submit ={first}</button>
      <Child1 data={response}></Child1>
      {/* {response.length && response.map(({title})=><div key={title}>{title}</div>)} */}
    </div>
  )
}

export default QueryRequest1

