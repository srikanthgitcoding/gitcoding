import React  from 'react'

function B({userData,modifyUserData}) {
    console.log("B")
    
  return (
    <div>B
        {userData && userData.map((item,index)=>{
          console.log(item)
            return <div key={index}>{item}</div>
        })}

        <button onClick={modifyUserData}>add user items</button>
    </div>
  )
}

export default React.memo(B)