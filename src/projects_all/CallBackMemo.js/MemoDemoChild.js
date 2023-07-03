// import React, {memo} from 'react'

// function MemoDemoChild() {
//     console.log("MemoDemoChild")
//   return (
//     <div>MemoDemoChild</div>
//   )
// }

// export default memo(MemoDemoChild)

import React, {memo} from 'react'
import MemoDemoChildChild from './MemoDemoChildChild'

function MemoDemoChild({todos, todoUpdate}) {
    console.log("MemoDemoChild", todos)
    
  return (
    <div>MemoDemoChild
    <MemoDemoChildChild></MemoDemoChildChild>
    <div>
    {todos && todos.map((e,index)=>{
        return <div key={index}>{e}</div>
    })}
    <button onClick={todoUpdate}>AddTodo</button>
    </div>
    </div>
  )
}

export default memo(MemoDemoChild)