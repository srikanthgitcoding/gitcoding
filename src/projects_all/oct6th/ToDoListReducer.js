import React, { useReducer, useState } from 'react'

function ToDoListReducer() {
    const initialState = {
        totalNotes : 0,
        notes : []
    }
    
    const [first, setfirst] = useState('')
    const reducerFuntion=(prevState,action)=>{
        switch(action.type){
            case "ADD":
                return {
                    totalNotes : prevState.totalNotes + 1,
                    notes : [...prevState.notes,action.payload]
                }
            case "REMOVE":
                return {
                    ...prevState,
                    totalNotes:prevState.totalNotes - 1,
                    notes : prevState.notes.filter((item,index)=>{
                        return index != action.payload
                    })
                }    
            default:
                return prevState    
        }
    }
    const submitForm=(e)=>{
        e.preventDefault()
        dispatchMethod({type:"ADD", payload:first})

    }
    
    const [Currentstate, dispatchMethod] = useReducer(reducerFuntion, initialState)
  return (
    <div>
        <form onSubmit={submitForm}>
            <div>
                <input value={first} type="text" onChange={(e)=>setfirst(e.target.value)}/>
                <button type='submit'>Add</button>
            </div>
        </form>
        

        {Currentstate.notes && Currentstate.notes.map((item,index)=>{
            return <div key={index}>{item} <button onClick={()=> dispatchMethod({type:"REMOVE", payload:index})}>X</button></div>
        })}
    </div>
  )
}

export default ToDoListReducer