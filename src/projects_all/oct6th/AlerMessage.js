import React, { useEffect, useState } from 'react'

import './Alert.css'

function AlerMessage({msg,type,removeAlert}) {
    useEffect(() => {
     const timout = setTimeout(() => {
        console.log("remove alert...")
        removeAlert()
     }, 3000);
     return () =>clearTimeout(timout)
    }, [])
    
  return (
    <>
    <div className={type}>{msg}</div>
    </>
  )
}

export default AlerMessage