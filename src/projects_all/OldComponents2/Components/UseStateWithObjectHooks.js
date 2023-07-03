import React , {useState} from 'react'

function UseStateWithObject(){

    const [schoolDetails,setSchoolDetails] = useState({schoolName : " ", schoolLocation : " "})
    
    return(
        <form>
        <div>
            <input type="text" value={schoolDetails.schoolName} 
            onChange={ (e) => setSchoolDetails({...schoolDetails , schoolName : e.target.value})} />
            <input type="text" value={schoolDetails.schoolLocation} 
            onChange={ (e) => setSchoolDetails({...schoolDetails , schoolLocation : e.target.value})}
            />
            <div>FirstName : {schoolDetails.schoolName}</div>
            <div>lastName : {schoolDetails.schoolLocation}</div>
            
        </div>
        </form>
    )
}

export default UseStateWithObject