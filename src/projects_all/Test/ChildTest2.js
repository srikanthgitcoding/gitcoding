import React from 'react'

function ChildTest2({arr,increaseArr}) {
    console.log("ChildTest2")
  return (
    <>
    <div>{arr && arr.map((item,index)=><div key={index}>{item}</div>)}</div>
    <button onClick={increaseArr}>Add todo</button>
    </>
  )
}

export default React.memo(ChildTest2)