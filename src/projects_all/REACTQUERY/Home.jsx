import React,{useState} from "react";
import {useQuery} from 'react-query'
import axios from "axios";

const apicall=()=>{
return axios.get('https://jsonplaceholder.typicode.com/todos/')
}
var count = 0

function Home() {
  const [timer,setTimer] = useState(3000)
  const onSuccessCallback =(data,refetchInterval,refetchOnMount)=>{
    count++
    console.log("count",count)

    if(count === 3){
      setTimer(0)
    }
console.log("suces",data)
  }
  const onError =(error)=>{
    console.log("error",data)
      }

const {isLoading,data,isError,error,isFetching,refetch : clickME,refetchInterval,refetchOnMount} = useQuery("sample",apicall,{enabled:true,onSuccess:onSuccessCallback,onError,refetchOnMount:true,refetchInterval:timer})
if(isLoading){
    return <div>Loading</div>
}

  return <div>
  <button onClick={clickME}>CLICK HER ME CALL</button>
  {
    data?.data?.map((item)=><div>{item.title}</div>)
    }</div>;
}

export default Home;
