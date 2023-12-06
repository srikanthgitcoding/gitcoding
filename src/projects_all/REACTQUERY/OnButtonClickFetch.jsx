import React from 'react'
import useFetch from './useFetch'

function OnButtonClickFetch() {
    const onSucess =()=>{
console.log("succes buto")
    }
    const onError =()=>{
        console.log("failure buto")

    }
    const {data,isLoading,isFetching, refetch:buttonClick} = useFetch(onSucess,onError,"btnclick",false)
    if(isLoading){
        return <div>is loaing....</div>
    }
    if(isFetching){
        return <div>is fetching</div>
    }
  return (
    <div>
    {!data && <div>no data</div> }
    {data?.data && data?.data?.map((item)=>(<div>{item.id}</div>) )}

        <button onClick={()=>buttonClick()}>onclick</button>
    </div>
  )
}

export default OnButtonClickFetch

