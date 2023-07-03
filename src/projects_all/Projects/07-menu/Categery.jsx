import React from 'react'

function Categery({cateroyesList,filterCatergyData}) {
  return (
    <div>{
        cateroyesList && cateroyesList.map((category,index)=>{
            return <span  key={index}>
                <button className='primary' type="button" onClick={()=>filterCatergyData(category)}>{category}</button>
            </span>
        })
    }</div>
  )
}

export default Categery