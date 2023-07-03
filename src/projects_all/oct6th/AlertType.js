import React, { useEffect } from 'react'

function AlertType({msg,type,setAlertMessage}) {
    
    useEffect(() => {
    const timeOut1 = setTimeout(() => {
        setAlertMessage("","",false)
    }, 2000);
    
      return () => {
        clearTimeout(timeOut1)
      }
    }, [])
    
  return (
    <div className={type}>{msg}</div>
  )
}

export default AlertType