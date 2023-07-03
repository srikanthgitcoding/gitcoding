import React, { useState } from 'react'
import AlerMessage from './AlerMessage'
function Groceries() {
  const [first, setfirst] = useState("")
  const [groceryList, setGroceryList] = useState([])
  const [editId, setEditId] = useState()
  const [editEnable, setEditEnable] = useState(false)
  const [alert, setAlert] = useState({show:false,msg:"",type:""})

  const submitForm = (e) =>{
    e.preventDefault()
  if(first== "" || first == undefined || first == null){
    showAlert(true,"item shouldnt be empty","danger")

  } else if(editEnable){
        setGroceryList(groceryList.map((item,index)=>
        {
            if(editId === index){
                return first
            }
            return item
        }
        ))
        setEditEnable(false)
        setfirst("")
        showAlert(true,"item edited successfully","success")

    }else{
        setGroceryList((prev)=>[...prev,first])
        //e.target.reset()
        setfirst("")
        showAlert(true,"item added successfully","success")
    }
  }

  const showAlert =(show=false,msg="",type="") =>{
    console.log("show alert called")
    setAlert({show,msg,type})

  }
  const clearGroceries = ()=>{
    setGroceryList([])
  }
  const editGroceries = (index) =>{
    setfirst(groceryList[index])
    setEditId(index)
    setEditEnable(true)

  }
  const deleteItem = (id) =>{
    const li = groceryList.filter((item,i)=>{
        if(id != i) return item
    })
    setGroceryList(li)
    showAlert(true,"item deleted successfully","danger")

  }
  const removeAlert = () =>{
    showAlert()
  }

  return (
    <div>
        {alert.show && <AlerMessage {...alert} removeAlert={removeAlert}></AlerMessage>}
        <form onSubmit={submitForm}>
            <input value={first} type="text" onChange={(e)=>setfirst(e.target.value)} />
            <button type="submit">submit</button>
        </form>
        {groceryList && groceryList.map((grocery,index) =>{
            return <div key={index}>{grocery} <span onClick={()=>editGroceries(index)}>Edit</span> <span onClick={()=>deleteItem(index)}>Delete</span></div>
        })}
        <button type="button" onClick={clearGroceries}>Clear groceries</button>
    </div>
  )
}

export default Groceries