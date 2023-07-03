import React from 'react'

function ChildTest() {
    console.log("ChildTest")
  return (
    <div>ChildTest</div>
  )
}

export default React.memo(ChildTest)