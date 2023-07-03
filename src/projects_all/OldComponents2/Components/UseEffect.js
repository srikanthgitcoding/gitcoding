import React, {useState,useEffect } from 'react';


function UseEffect(){

    const [count,seCount] = useState(0)

    useEffect(()=>{
        document.title = `counter is  ${count}`
    })
    
    return (
    <button onClick={ () => seCount(count + 1) }>{count} click me</button>
    )
}

export default UseEffect