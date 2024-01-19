import React, { useCallback, useState } from 'react'
import EMailInput from './EMailInput'
import PasswordInput from './PasswordInput'
import { callbackify } from 'util'


const FormUsecallBackExample:React.FC = () => {
    const [email,setEmail] =useState<string>("")
    const [password,setPassword] =useState<string>("")
    
    const setemailfn =useCallback((value:string)=>{
        setEmail(value)
    },[email])

    const setpasswordfn =useCallback((value:string)=>{
        setPassword(value)
    },[password])
  return (
    <div>
      <EMailInput value={email} onChange={setemailfn}></EMailInput>
      <PasswordInput value={password} onChange={setpasswordfn}></PasswordInput>
    </div>
  )
}

export default FormUsecallBackExample
