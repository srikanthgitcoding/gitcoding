// 1st step is import react -- any component u create always make sure to import it

import React from 'react'


// function Greet(){
//     return <h1>Hello Srikanth</h1>
// }

// fat arrow syntax

console.log("React", React)
const Greet = ({name,age}) => {
    // const {name,age} = props //one way
    return(<h1>Hello {name} from fat arrow syntax and  age is : {age}</h1>)
}

export default Greet 