import React, { useCallback, useState } from 'react'
import QueryRequest1 from './QueryRequest1'
import QueryRequest2 from './QueryRequest2'
import useQueryRequest from './useQueryRequest'
import axios
 from 'axios'
const QueryRequest = () => {
  const baseURL = axios.create({
    baseURL:"https://finalspaceapi.com/api/v0/character"
  })

  console.log("====", baseURL.get("/?limit=2").then(data=>(console.log(data))))
  return (
    <div>
      QueryRequest


      <QueryRequest1></QueryRequest1>
      <QueryRequest2></QueryRequest2>

    </div>
  )
}

export default QueryRequest
