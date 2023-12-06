import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const callbackfn =()=>{
return axios.get("https://jsonplaceholder.typicode.com/todos")
}

function Home() {
  const {data,isError,isLoading,isFetching,cachetime,refetch:OnclickButton} = useQuery("key", callbackfn,{refetchOnMount:true})
  if(isLoading){
    return <>loading please wait .....</>
  }
  if(isFetching){
    return <>fetching please wait .....</>
  }
  if(isError){
    <>there is an error</>
  }
  return (
    <div>
    call is succesfull
    {
  data?.data?.map((obj)=><div><Link to={`/singleproduct/${obj.id}`}> {obj.title}</Link></div>)
    }
    <button onClick={()=>OnclickButton()}>clikc me to make call</button>
    </div>
  )
}

export default Home