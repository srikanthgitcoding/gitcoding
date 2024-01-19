import axios from 'axios'
import React, {useState} from 'react'
import { useQuery } from 'react-query'

const courseFn=async()=>{
    return await axios.get("https://course-api.com/react-tabs-project")
}

const useGetQuery=()=>{
    return useQuery({queryKey:["Course"],queryFn:courseFn})
}

const Slider = () => {
const {data,isLoading } =useGetQuery()
const [count, setCount] = useState(0)
if(isLoading)<div>Loading............</div>

const setCountMethod =()=>{
    setCount(count+1)
}

const goToPreviousPage =()=>{
        setCount(count-1)
    
}

const goToNextPage =()=>{
        setCount(count+1)
    
}

const {id,order,title } = data?.data[count] ?? ""

  return (
    <div>
       {title}
      <button onClick={goToPreviousPage} disabled={count == 0}>Prev</button>
      <button onClick={goToNextPage} disabled={count < data?.data?.length-1 ?false : true}>Next</button>
    </div>
  )
}

export default Slider
