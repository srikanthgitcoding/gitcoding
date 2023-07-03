import React, { useState } from 'react'

function CRUD() {const [first, setfirst] = useState("")
    const [data, setData] = useState([])
    const [message, setMessage] = useState("")
    const submitForm = (e) =>{
        e.preventDefault()
        console.log("form called", first)
        setData((p)=> {
            if(data.indexOf(first) === -1){
                setMessage("")
                return [...data, first]
            }
            setMessage("Cant Add duplicates")
            return p
        })
    }

    const removeElement = (ele) =>{
        const newData = data.filter((c)=>{
            return ele !== c
        })
        setData(newData)
    }
  return (
    <div>
    {message}
        <form onSubmit={submitForm}>
        <input type="text" value={first} onChange={(e)=> setfirst(e.target.value)}></input>
        <button type="submit">Add</button>
        </form>

        {
            data.length === 0 ? <div>list is empty Add some data</div> : data.map((e)=>{
                return <div>{e}<span onClick={() =>removeElement(e)}>Remove me</span></div>
            }) 
        }
    </div>
  )
}

export default CRUD