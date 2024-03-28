import React from 'react'

const Child1 = ({data}) => {
    console.log("props",data)
  return (
    <div>
      
    </div>
  )
}

export default React.memo(Child1)
