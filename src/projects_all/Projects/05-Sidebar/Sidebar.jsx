import React, { useEffect, useRef, useState } from 'react'
import './sidebar.css';

let data = require('./data.json');
//import './sidebar.css'; this will cause error

function Sidebar() {
  const [list, setlist] = useState(data)
  const [selectedValue, setselectedValue] = useState(0)
  const [sameValueClicked, setSameValueClicked] = useState(false)
  const prevValue = useRef()
  // useEffect(() => {
  // }, [selectedValue])

  const updateselectedValue = (index) =>{
    prevValue.current = selectedValue
    if (prevValue.current == selectedValue) setSameValueClicked(!sameValueClicked)
    setselectedValue(index)
    console.log("updateselectedValue", prevValue, selectedValue,sameValueClicked)
  }
  useEffect(() => {
    console.log("prevValue", prevValue, selectedValue)
  }, [selectedValue])
  
  
  return (
    <div>
    {
      list && list.map((parent,pIndex)=>{
        let isArray = Array.isArray(parent)
        if(isArray) return <div className={`${(selectedValue == pIndex) && 'highlightBlue'}`} onClick={()=>updateselectedValue(pIndex)}>{parent[0]}</div>
        return(<ul>
          {
            Object.keys(parent).map((key,index)=>{
              return (<li key={key} className={`${(selectedValue == pIndex) && 'highlightBlue'}`} onClick={()=>updateselectedValue(pIndex)}>{key}
              <ul className={`${((selectedValue == pIndex) && !sameValueClicked) ? 'show' : ((selectedValue == pIndex) && sameValueClicked) ? 'hide':"hide"}`}>
                {
                  parent[key].map((item1,index1)=>{
                    return <li key={index1}>{item1}</li>
                  }) 
                }
              </ul>
              </li>)
            })
          }
        </ul>)
      })
    }

    </div>
  )
}

export default Sidebar