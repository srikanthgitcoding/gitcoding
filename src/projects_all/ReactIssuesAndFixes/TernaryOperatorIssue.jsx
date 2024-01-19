import React from 'react'
import { useState } from 'react'

const TernaryOperatorIssue = () => {
    const [data,setData] = useState([])
  return (
    <div>
      {data.length ? "data exists" : null} 
      {data.length && "data exists" } 
      {0 && "data exists" } 
      {NAN && "data exists" } 
      {undefined && "data exists" } 
      {null && "data exists" } 
      {"" && "data exists" } 
      {data.length > 0 && "data exists" } 
      {!!data.length && "data exists" } 
      {/* two exclamatory marks it converts value to boolean if it is zero false else true */}




      {/* sometimes u may not need to add null in that case use 
      1)in line 2,  && operartor, if first part is 0 it evaluvates and returns 0 it doesnt go to next value
      if it is truthy value it goes second part and returns "data exists"
      
      2) 
      */}

    </div>
  )
}

export default TernaryOperatorIssue
