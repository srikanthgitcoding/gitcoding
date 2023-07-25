import React from "react";
import {useQuery} from 'react-query'
import axios from "axios";

const apicall=()=>{
return axios.get('https://jsonplaceholder.typicode.com/todos/')
}
function Home() {

const {isLoading,data,isError,error,isFetching} = useQuery("sample",apicall)
console.log("data", isLoading, isFetching);
if(isLoading){
    return <div>Loading</div>
}

  return <div>{
    data.data.map((item)=><div>{item.title}</div>)
    }</div>;
}

export default Home;
