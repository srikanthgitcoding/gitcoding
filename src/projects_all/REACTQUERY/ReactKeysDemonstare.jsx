import React, { useContext, useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid';
import {ContextCreated} from './Home'

const ReactKeysDemonstare = () => {
    const user= useContext(ContextCreated)
    console.log("acdepter",user)
    
    const textinputRef = useRef("")
const [indexkeys,setIndexkeys] = useState(["abc"])
const [itemIdkeys,setItemIdkeys] = useState([{id:1,fname:"srikanth"}])
const addNewiTems=(e)=>{
    e.preventDefault();
    console.log(e.target[1].type)
    // textinputRef.current.value =""

    // setIndexkeys([...indexkeys,textinputRef.current.value])
    setItemIdkeys(prev=>([{id:uuid(),fname:textinputRef.current.value},...prev]))
}
useEffect(()=>{
console.log(itemIdkeys)
},[itemIdkeys])
console.log(React.createElement("div",{key:"test",name:"fistName"},"some texct"))
  return (
    <div>
    <form onSubmit={addNewiTems}>
    <div key="" name="firstName">some tect</div>
        <input type="text" id="name" name="test" ref={textinputRef}></input>
        <button type="submit">add new item</button>

    </form>
    <ul>{itemIdkeys.length && itemIdkeys.map((item,i)=><input type="text" key={item.id} value={item.fname} />)}</ul>
    <div>index</div>
    <ul>{itemIdkeys.length && itemIdkeys.map((item,i)=><><input type="text" key={i} value={item.fname} /><br/></>)}</ul>


      
    </div>
  )
}

export default ReactKeysDemonstare
