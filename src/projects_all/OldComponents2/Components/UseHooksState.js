import React, {useState} from 'react'

function Counter(){
    const [count,incrementCounter] = useState(5)
    return (
        <div>
            <button onClick={ () => incrementCounter( count + 1 )}>Count {count}</button>
        </div>
    )
}

export default Counter