import React from 'react'


export function Child(props){
    console.log(props)
    return(
        <div>
        <button onClick={() => props.greetParent("abhishek bachan")}>childButton</button>
        From Child component: {props.person.name} {props.person.age}
        </div>
    )
}