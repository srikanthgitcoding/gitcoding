import React from 'react'


export function FunctionEvents(){
    function click(){
        console.log("cliked")
    }
    return(
        <div>
            <button onClick={click}>clickMe</button>
        </div>
    )
}