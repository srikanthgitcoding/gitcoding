import React, { useState } from 'react'
import EMailInput from './EMailInput'
import PasswordInput from './PasswordInput'


const FormUsecallBackExample:React.FC = () => {
    const [email,setEmail] =useState<string>("")
    const [password,setPassword] =useState<string>("")
    const setemailfn =(value:string)=>{
        setEmail(value)
    }

    const setpasswordfn =(value:string)=>{
        setPassword(value)
    }
  return (
    <div>
      <EMailInput value={email} onChange={setemailfn}></EMailInput>
      <PasswordInput value={password} onChange={setpasswordfn}></PasswordInput>
    </div>
  )
}

export default FormUsecallBackExample
