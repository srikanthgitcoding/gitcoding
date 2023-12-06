import React, { useCallback, useMemo, useState } from 'react'

const Test2 = () => {

   const [users,setUsers] = useState([])
   
   const setUsersFunction =useCallback((val)=>{
    setUsers((prev)=>[...prev,val])
   },[setUsers])

  return useMemo(()=>{users,setUsersFunction},[users])
}

export default Test2
