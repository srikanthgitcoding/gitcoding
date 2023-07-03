import React, {useState} from 'react'

function UseStateWithArray(){
    const [ items, setItems ] = useState([])
    const addElements = () => {
        // setItems([...items,Math.floor(Math.random() * 10) + 1])
        setItems([...items,{
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }
    return(
        <div>
        <div onClick={addElements}>Button</div>
        <ul>
        {
            items.map((item) => <li>{item.id} {item.value}</li>)
        }
        </ul>
        </div>
    )
}

export default UseStateWithArray