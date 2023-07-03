import React, {useState, useEffect} from 'react'
import AxiosbaseUrl from './Axios'

function Index() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function sample(){
        const res = await AxiosbaseUrl.get("todos/1")
        console.log("RES", res)// returns a promise 
        console.log("RES", res.data) //returns object
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response =>response.json()) // return promise
        // .then(json => console.log(json))  // return promise              
    }
    sample()
  }, [])
    
  return (
    <div>Index</div>
  )
}

export default Index
//notes
//1)axios has to be imported from " import axios from 'axios " where as fetch doesnt need to importss
//2)axios returns an object 
//01)fetch returns a promise -> first convert it to json 