import React, {useState} from 'react'

function Counter(){
    const increment = 0
    const [count,incrementCounter] = useState(increment)

    const incrementByFive = () =>{
        for(var i=0;i<5; i++){
            incrementCounter( prevState => console.log(prevState) )
        }
    }
    return (
        <div>
            {count}
            <button onClick={()=>incrementCounter(increment)}>reset</button> 
            <button onClick={()=>incrementCounter( prevState => prevState + 1 )}>Increment</button> 
            <button onClick={()=>incrementCounter( prevState => prevState - 1 )}>Decrement</button> 
            <button onClick={incrementByFive}>Increment by 5</button> 
        </div>
    )
}

export default Counter