// import axios from 'axios'
// import React from 'react'
// import { useQuery } from 'react-query'

// const callbackfn=()=>{
//     return axios.get("https://jsonplaceholder.typicode.com/todos")

// }
// function useFetch(onSucess,onError,key,enable=true,onMount= true) {
//     return useQuery(key,callbackfn,{onSucess,onError,enabled:enable})
    
// }

// export default useFetch




function fn({fname,lastName="mothkuri",age}){
console.log(fname,lastName,age)
}

fn({fname:"srikanth"})