import React, { useEffect, useState } from 'react'

function FindMethod() {

    const listO = [
        {
            id : 1,
            name : "srikanth"
        },
        {
            id : 2,
            name : ",manisha"
        }, 
        {
            id : 3,
            name : "srikanthmanisha"
        }
    ]
  const [list, setlist] = useState(listO)  
  const clickedM = () =>{
      console.log("clickedM")
    setlist(current => {
        return current.map((c)=>{
            if(c.id === 2){
                return {...c, name : "changed"}
            }
            return c
        })
    })
  }  
 useEffect(() =>{
    console.log("list", list)
 },[list])
  
  return (
    <div>FindMethod
    {listO && listO.map((c)=>{
        return <div onClick={clickedM}>{c.name}</div>
    })}
    </div>
  )
}

export default FindMethod