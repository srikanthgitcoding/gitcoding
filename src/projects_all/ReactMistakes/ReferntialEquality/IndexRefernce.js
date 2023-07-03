import React, { useEffect, useState, useMemo } from 'react'

function IndexRefernce() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [darkMode, setDarkMode] = useState(true)
    const person = useMemo(() => {
        return {
            fname, lname
        }}, [fname,lname])
    
    
    useEffect(() => {
      console.log("cvhanged")
    }, [person])
    
  return (
    <div>IndexRefernce

        <input type="text" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)}/>
        <input type="text" name="lname" value={lname} onChange={(e)=>setLname(e.target.value)}/>
        <input type="checkbox" name="fullname" value={darkMode} onChange={(e)=>setDarkMode(e.target.checked)}/>
    </div>
  )
}

export default IndexRefernce