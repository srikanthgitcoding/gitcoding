import React, { useCallback, useMemo } from 'react'
import { useState,useEffect } from 'react'

function useTest1() {
    console.log("usetest1 enter")
   const [users,setUsers] = useState([])
   
   const setUsersFunction =useCallback((val)=>{
    console.log("usetest1 set fn")
    setUsers((prev)=>([...prev,val]))
   },[setUsers])

   useEffect(() => {
    console.log("usetest1 useeffect")
   }, [users])

   useEffect(() => {
    console.log("usetest1 setUsersFunction useeffect")
   }, [setUsersFunction])
   
  return useMemo(()=> {
    console.log(" usetest1 return statemnt")
    return {users, setUsersFunction}
    },[users])
}


export default useTest1