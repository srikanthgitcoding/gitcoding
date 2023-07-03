import React, { useEffect, useState, useLayoutEffect } from 'react'
import './form.css'
function Form() {
    const accountDetailsObj = {
        "accountNumber" : 0,
        "ifscCode" : 0,
        "accountHolderName" : "",
        "amount" : 1
    }
    const [AccountDetails, setAccountDetails] = useState(accountDetailsObj)
    const [listData, setListData] = useState([])
    const [selectedItem, setselectedItem] = useState([])
    const [notification, setNotification] = useState(false)

const style1 = {
    background:"#666"
}    
const addData = (e) =>{

e.preventDefault()
console.log("===",AccountDetails)
    setListData([...listData,AccountDetails])
    setAccountDetails({
        "accountNumber" : 0,
        "ifscCode" : 0,
        "accountHolderName" : "",
        "amount" : 1
    }  ) 

}
useEffect(() => {
    console.log("AccountDetails",listData)
   
}, [listData])
useLayoutEffect(() => {
    console.log("use layout effect")
    setNotification(true)
    setTimeout(() => {
        setNotification(false)

    }, 3000);
}, [listData])
const deleteData = (index) =>{
    console.log("index",index)
const updateddata = listData.filter((e,i)=>{
    return index != i
})
setListData(updateddata)
}
const selectedItemfn = (index) =>{
    console.log("selectedItemfn",index)
    let i = selectedItem.indexOf(index) 
    let newVariable;
    if (i > -1) {
        newVariable = selectedItem.filter((e,ind) =>{
            return ind != i
        })
        setselectedItem([...newVariable])
    }
    else setselectedItem([...selectedItem,index])
}
useEffect(() => {
  console.log("selectedItem iuse effect", selectedItem)
}, [selectedItem])


const editData = (index) =>{
    const updateddata = listData.filter((e,i)=>{
        return index == i
    })
    console.log("updateddata",updateddata)
    setAccountDetails({ 
        "accountNumber" : updateddata[0].accountNumber,
        "ifscCode" : updateddata[0].ifscCode,
        "accountHolderName" : updateddata[0].accountHolderName,
        "amount" : updateddata[0].amount,
    })
}
  return (
    <div>{
        notification && <div>item addesd succesfully</div>
    }
        <form onSubmit={addData}>
            <input type="text" value={AccountDetails.accountNumber} placeholder="accountNumber" onChange={(e)=>{setAccountDetails({...AccountDetails,accountNumber:e.target.value})}}></input><br></br>
            <input type="text" value={AccountDetails.ifscCode}  placeholder="IfscCode" onChange={(e)=>{setAccountDetails({...AccountDetails,ifscCode:e.target.value})}}></input><br></br>
            <input type="text" value={AccountDetails.accountHolderName}  placeholder="accountHolderName" onChange={(e)=>{setAccountDetails({...AccountDetails,accountHolderName:e.target.value})}}></input><br></br>
            <input type="text" value={AccountDetails.amount}  placeholder="amount" onChange={(e)=>{setAccountDetails({...AccountDetails,amount:e.target.value})}}></input><br></br>
                <button type="submit">submit form</button>
                
        </form>
        {listData && listData.map((e,index) =>{
            return <div><div className={ `sample ${selectedItem.indexOf(index) > -1 && "highlight"}`} onClick={()=>selectedItemfn(index)}> Account number - {e.accountNumber} Ifsc code- {e.ifscCode} -hoder name {e.accountHolderName}</div><button onClick={() => deleteData(index)}>Delete</button> 
            <button onClick={() => editData(index)}>Edit</button> 
            </div>
        })
        }
    </div>
  )
}

export default Form