import React, { useReducer, useState } from 'react'
import AlertType from './AlertType'
import './Todo.css'
function ReducerExample() {
    const initalState = {
        totalItems : 0,
        arr : []
    }
    const [editEnable, setEditEnable] = useState(false)
    const [editId, setEditId] = useState('')
    const [alert, setAlert] = useState({msg:"",type:"",showAlertMessage:true})
    const reducerFunction =(prevState,action)=>{
        switch(action.type){
            case "ADD":
                return {
                    totalItems : prevState.totalItems + 1,
                    arr: [...prevState.arr,action.payload]
                }
            case "DEL":
                return {
                    totalItems : prevState.totalItems - 1,
                    arr: prevState.arr.filter((item,index)=>{
                        return index != action.payload
                    })
                }
            case "EDIT":
                return {
                        totalItems : prevState.totalItems,
                        arr: prevState.arr.map((item,index)=>{
                            if(index == editId){
                                return action.payload
                            }
                            return item
                        })
                }    
            default:
                return prevState    
        }

    }
    const [inputValue, setInputValue] = useState("")
    const [currentState, dispatchMethod] = useReducer(reducerFunction, initalState)
    
    const deleteItem=(i)=>{
        dispatchMethod({type:"DEL",payload:i})
        setAlertMessage("item has been deleted","danger",true)

        
    }
   
    const SubmitForm=(e)=>{
        e.preventDefault()
        if(editEnable){
            dispatchMethod({type:"EDIT",payload:inputValue})
            setInputValue("")
            setAlertMessage("item has been Edited ","success",true)

            return
        }
        dispatchMethod({type:"ADD",payload:inputValue})
        setInputValue("")
        setAlertMessage("item has been added","success",true)
    }
    const enableEdit =(val,i)=>{
        setInputValue(val)
        setEditEnable(true)
        setEditId(i)
    }
    const setAlertMessage =(msg="",type="",showAlertMessage=false)=>{
        setAlert({
            msg,type,showAlertMessage
        })
    }
  return (
    <div>ReducerExample
        {alert.showAlertMessage && <AlertType {...alert} setAlertMessage={setAlertMessage}></AlertType>}
        <form onSubmit={SubmitForm}>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button type="submit" >Add</button>
        </form>
        {
            currentState && currentState.arr.map((item,index)=>{
                return <div key={index}>{item} <i className="fa fa-trash-o" aria-hidden="true" style={{padding:"10px"}} onClick={()=>deleteItem(index)}></i>
                <i className="fa fa-pencil-square-o" aria-hidden="true" style={{padding:"10px"}} onClick={()=>enableEdit(item,index)}></i>
                </div>
            })
        }
    </div>
  )
}

export default ReducerExample