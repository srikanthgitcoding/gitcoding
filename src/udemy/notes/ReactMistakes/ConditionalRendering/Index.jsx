import React, { useEffect, useState } from 'react'
// here u get issue 
// React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return? 

const StateUseIssue = ({id}) => {
    if(id){
        return "test"
    }
    const  [value,setValue]= useState()
    useEffect(()=>{

    })
  return (
    <div>
      something
    </div>
  )
}

export default StateUseIssue
