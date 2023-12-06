import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function  useHookCallBackSetMethodDependecny() {
    console.log("useHookCallBackSetMethodDependecny")
    const [filterData,setFilterData] = useState([])

    const onfilterChange = useCallback((item)=>{
        setFilterData((prev)=>[...prev,item])
    },[setFilterData])
    useEffect(()=>{
console.log("filterData useeffect")
    },[filterData])

    useEffect(()=>{
        console.log("onfilterChange useeffect")
            },[onfilterChange])

return useMemo(()=>{
    console.log("return statement")
    return {filterData,onfilterChange}
    }
    ,[filterData,onfilterChange])
}
