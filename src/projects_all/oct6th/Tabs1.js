import React, { useEffect, useState } from 'react'
import './Todo.css';
function Tabs1() {
    const [apiData, setApiData] = useState([])
    const [value, setValue] = useState(0)
    useEffect(() => {
        const APIcall =async()=>{
        const jsonresp = await fetch("https://course-api.com/react-tabs-project")
        const data = await jsonresp.json()
        setApiData(data)
      }
      APIcall()
    
      return () => {
        
      }
    }, [])
    if(apiData.length == 0){
        return <div>Loading....</div>
    }

    const {id,order,title} = apiData[value]
    return (
        <div>
            {/* <h2>tabs data goes here</h2>
            <button onClick={()=>setValue(0)}>Tab1</button>
            <button onClick={()=>setValue(1)}>Tab2</button>
            <button onClick={()=>setValue(2)}>Tab3</button>
            <h1>{title}</h1> */}
            <h2>tabs data goes here</h2>
            {apiData && apiData.map((item,index)=>{
                return <button className={`${index === value && 'bg1'}`} onClick={()=>setValue(index)}>Tab {index}</button>
            })}
            <h1>{title}</h1>
        </div>
    )
}

export default Tabs1