import React, { useCallback, useState } from 'react'

const CallbackIllustaration = () => {

  const [counter2, setCounter2] = useState(0)

  const meth =useCallback(()=>{
    //  points to note here 
    // 1) when there are no dependencies here u r referncing counter 2 if counter 2 increase by outside source its value always remains same because
    //function never gets re created and hence never gets lateste data
    // 2) line number 18 we are changing the counter in another way so component gets re rendered however usecallback function never re created so value always be old
    console.log("counter2", counter2) 
    setCounter2(counter2 +1)
  },[])
  
  return (
    <div>
    <button onClick={meth}>counter 1 - {counter2}</button>
      <button onClick={()=>setCounter2(counter2+1)}>counter 2 - {counter2}</button>
    </div>
  )
}

export default CallbackIllustaration
