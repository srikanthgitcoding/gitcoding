import React, { useState ,useEffect} from 'react'

function useFilterNo() {
    console.log("usefilter method inside")
const [filter,setFilter] = useState([])


  const onFilterChange =(data) =>{
    setFilter((prev)=>[...prev,data])
  }
  useEffect(() => {
    console.log("filter state change useEffect")
  }, [filter])

  useEffect(() => {
    console.log("onFilterChange useEffect")
  }, [onFilterChange])
  const ret = ()=> {
    console.log("return statement no f") 
    return {filter,onFilterChange}
  }
  return ret()


  }


export default useFilterNo