import React, { useState } from 'react'

function Tabs() {
    const [first, setfirst] = useState("")
  return (
    <div>
        <input value={first} type="text" onChange={(e)=>setfirst(e.target.value)} />
    </div>
  )
}

export default Tabs