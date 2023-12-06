import React, { useCallback, useMemo, useState } from 'react'
import { useEffect } from 'react'

export default function useFilter() {
  
  const [filterOpt,setFilterOpt] = useState([])

  const onFilterChangeOpt =useCallback((data) =>{
    setFilterOpt((prev)=>[...prev,data])
  },[setFilterOpt])

  useEffect(()=>{
    console.log("useFilter opt useeffect filterOpt")
  },[filterOpt])

  useEffect(()=>{
    console.log("useFilter opt useeffect onFilterChangeOpt")
  },[onFilterChangeOpt])

  return useMemo(()=>({filterOpt,onFilterChangeOpt}),[filterOpt,onFilterChangeOpt])

}

