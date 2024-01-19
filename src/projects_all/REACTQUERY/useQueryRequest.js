import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


const getcall=async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/todos/")
}
const useQueryRequest = (enabled) => {
    return useQuery({queryKey:["keyyy"],queryFn:getcall,enabled:enabled,staleTime:Infinity,cacheTime:200000})
}

export default useQueryRequest
