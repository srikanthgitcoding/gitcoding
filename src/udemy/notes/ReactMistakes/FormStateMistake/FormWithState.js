import React, { useEffect, useState } from 'react'

function FormWithState() {
    console.log("render")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e)=>{
        e.preventDefault()
    }

    useEffect(() => {
      console.log(email,password)
    }, [email,password])
    
    
  return (
    <div>
        <form onSubmit={submitForm}>
            <input value={email} type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <input value={password} type="text" onChange={(e)=>setPassword(e.target.value)}/>
        </form>
    </div>
  )
}

export default FormWithState

// every time state changes it re renders the the component in our case this is not required we can avoid this using use ref