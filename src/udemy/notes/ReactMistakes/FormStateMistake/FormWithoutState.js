import React, { useRef } from 'react'

function FormWithoutState() {
    const EmailRef = useRef('')
    const PasswordRef = useRef('')
    
    const submitForm=(e)=>{
        e.preventDefault()
        console.log("log",EmailRef.current.value )
    }
    
  return (
    <div>
    <form onSubmit={submitForm}>
        <input ref={EmailRef} type="text" />
        <input ref={PasswordRef} type="password" />
        <button type="submit">submit</button>
    </form>
</div>
  )
}

export default FormWithoutState