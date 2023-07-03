import React, { useEffect, useState } from 'react'
import './editableTable.css'
const tableData = [
    {
        name : "srikanth",
        lastName : "mothkuri",
        age : 23
    },
    {
        name : "srikanth1",
        lastName : "mothkuri1",
        age : 24
    },
    {
        name : "srikanth2",
        lastName : "mothkuri2",
        age : 25
    }
]
function EditableTable() {
    const [editTable, setEditTable] = useState(tableData)
    const [threeDimentionalArray, setThreeDimentionalArray] = useState([])


    const changeName = (outerIndex,innerIndex) =>{
        let newarray = threeDimentionalArray.map((item,key) =>{
            if(outerIndex == key ){
                item[innerIndex] = 1
                return item
            }
            return item
        })   
        console.log("--newarray", newarray)  
        setThreeDimentionalArray([...newarray])   
    }

    const createThreeDimentionalArray = () =>{
        var Exforsys=[];
            for (var i=0; i <3; i++) {
            Exforsys.push([0,0,0]);
        setThreeDimentionalArray([...Exforsys])    
    }
    }

useEffect(() => {
    createThreeDimentionalArray()
    console.table("threeDimentionalArraytable",threeDimentionalArray)
}, [])

const changeInputValue =(e,index1,item)=>{
    console.log("----", index1, item, e.target.value)  
    let newData = [...editTable]
    newData[index1][item] = e.target.value
    setEditTable(newData)
}

  return (
    <div>
    
<h2>HTML Table</h2>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tbody>
  {
    editTable && editTable.map((data,index)=>{
        console.log("map")
        return (<tr>
            {
                Object.keys(data).map((item,indexObj) =>{ // here 'item' is key and data is object
                     return ( 
                        <td onDoubleClick={()=>changeName(index,indexObj)}>
                        {
                            threeDimentionalArray.length > 0 && threeDimentionalArray[index][indexObj] == 1 ? <input type="text" value={editTable[index][item]} onChange={(e)=>changeInputValue(e,index,item) }></input>:<span > {data[item]} </span>
                        }
                        </td>
                        
                        )
                })
            }
        </tr>)
    })
  }
  </tbody>
  
</table>

        </div>
  )
}

export default EditableTable

{/* {for (i in data){
            return <td onDoubleClick={()=>changeName(index)}>{name} </td>
            })
            } */}