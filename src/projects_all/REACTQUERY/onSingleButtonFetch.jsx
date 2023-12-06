import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

const callbackFn=({queryKey})=>{
    console.log("queryKey",queryKey)
    const id =queryKey[1]
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
function OnSingleButtonFetch() {
    const params = useParams()
    const id = params.id
    const {data,isLoading,isFetching} = useQuery(["single",id],callbackFn)
    console.log("data",data)
    if(isLoading | isFetching){
return<div>loading</div>
    }
  return (
    <div>
    <div>{!data && <div>verify id please</div>}</div>
    {data?.data.title} -<br/> {data?.data.id}
    </div>
  )
}

export default OnSingleButtonFetch