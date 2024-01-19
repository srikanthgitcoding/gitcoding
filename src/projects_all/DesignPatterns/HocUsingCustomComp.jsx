import React from 'react'


const useIncrement =(inital)=>{
    console.log("useIncrement",inital)
    const [count, setCount] = React.useState(inital)
    console.log("count",count)

    const setCountFn =(incrementBy=10)=>{
        console.log("setfn")
        setCount(c=>c+incrementBy)
    }
    return {count,setCountFn}
}

export const HocUsingCustomComp = () => {
    console.log("HocUsingCustomComp")
    const  {count,setCountFn} = useIncrement(0)
    const  {count:onHoverCount,setCountFn:onHoverCountFn} = useIncrement(0)

  return (
    <div>
      <button onClick={()=>setCountFn(6)}>onclick - {count}</button>
      <button onMouseOver={()=>onHoverCountFn(100)}>onhover - {onHoverCount}</button>
    </div>
  )
}

