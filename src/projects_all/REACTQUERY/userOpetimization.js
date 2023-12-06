import React from 'react'
import useFetch from './useFetch'

function userOpetimization() {
    const onSucess = ()=>{
        console.log("onSuccess")
    }
    const onError = ()=>{
        console.log("error")
    }
    const {data, isLoading,isError,error} =useFetch(onSucess,onError,false)
  return (
    <div>userOpetimization
    
    </div>
  )
}

export default userOpetimization