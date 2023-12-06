import React, { useState } from 'react'
import useTest1 from './useTest1'

function Test1() {
    const {users, setUsersFunction}= useTest1()
    const [count, setCount] =useState(0)
  return (
    <div>
        count is - {count} <br/>
        users : {users?.map(item=>item)}<br/>
        <button onClick={()=>setCount((prev)=>prev+1)}>increase count</button><br/>
        <button onClick={()=>setUsersFunction("user")}> add users</button>
    </div>
  )
}

export default Test1