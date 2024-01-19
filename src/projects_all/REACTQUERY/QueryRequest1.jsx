import React from 'react'
import useQueryRequest from './useQueryRequest'

const QueryRequest1 = () => {

// const {data,isLoading}= useQueryRequest(true)
// if(isLoading)<div>is Loading....</div>
// const response = data?.data ?? []

  return (
    <div>
      QueryRequest1
      {/* {response.length && response.map(({title})=><div key={title}>{title}</div>)} */}
    </div>
  )
}

export default QueryRequest1

