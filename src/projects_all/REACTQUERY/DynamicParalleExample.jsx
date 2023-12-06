import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

const callbackFn =(id)=>{
    
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}
const DynamicParalleExample = ({ids}) => {
    console.log("arraids",ids)
    const result = useQueries(
        ids.map(item=>({queryKey:["keyindic", item],queryFn:()=>callbackFn(item)}))
)
    console.log("result",result)
  return (
    <div>
      
    </div>
  )
}

export default DynamicParalleExample
