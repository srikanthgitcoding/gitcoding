import axios from 'axios'
import React from 'react'
import useFetch from './useFetch'

function OnMountFetch() {
    const onSucess = ()=>{
        console.log("onSuccess")
    }
    const onError = ()=>{
        console.log("error")
    }
    const {data, isLoading,isError,error, isFetching} =useFetch(onSucess,onError,"mount",true)
    if(isLoading){
      return <div>is loading/.....</div>
    }
      if(isFetching){
      return <div>is Fetching/.....</div>
    }
  return (
    <div>on mount
    {data?.data?.map((item)=>(<div>{item.title}</div>))}    
    </div>
  )
}

export default OnMountFetch
