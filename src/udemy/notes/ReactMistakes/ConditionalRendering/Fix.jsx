import React, { useEffect, useState } from 'react'
// here u get issue 
// React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return? 
// here is a fix
const StateUseIssue = ({id}) => {
    const  [value,setValue]= useState()
    useEffect(()=>{

    })
  return (
    <div>
      {id? "exists" :"doesnt exsists" }
    </div>
  )
}

export default StateUseIssue
