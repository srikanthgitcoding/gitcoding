import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Respo{
        userId: number,
        title: string,
}
const GetCAllWIthTypes = () => {
    const [data,setData] =useState<Respo[]>([])

    useEffect(()=>{
        (async()=>{
            let resp = await axios.get<Respo[]>("https://jsonplaceholder.typicode.com/todos/")
            setData(resp.data)
    
        })()
    },[])
 
  return (
    <div> &&&&&&&&&&&&&&&&&&&&&&&
      {data.length && data.map((item)=><div>{item.title}</div>)}
    </div>
  )
}

export default GetCAllWIthTypes
