import React, {useState} from 'react'

function ChangeAllinputsWithSingleState() {
    const [userDetails, setUserDetails] = useState({
        fnmae:"",
        lnmae:"",
        fullnmae:""
    })
    const changeInput=(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
    }
    console.log(userDetails)

  return (
    <div>
        <input type="text" name='fnmae' onChange={changeInput}/>
        <input type="text" name='lnmae' onChange={changeInput}/>
        <input type="text" name='fullnmae' onChange={changeInput}/>
    </div>
  )
}

export default ChangeAllinputsWithSingleState