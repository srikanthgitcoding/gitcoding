import React from 'react'
import useQueryRequest from './useQueryRequest'

const QueryRequest2 = () => {

const {data,isLoading,refetch}= useQueryRequest(false)
if(isLoading)<div>is Loading....</div>
const response = []
  return (
    <div>
      QueryRequest2- 
      <div>      
      {!!response.length && response.map(({title})=><div key={title}>{title}</div>)}
</div>
      <button onClick={()=>refetch()}>click me</button>
    </div>
  )
}

export default QueryRequest2
