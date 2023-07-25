import React, {useState,useCallback,useRef} from 'react'

const Button=React.memo(({children,onClick})=>{
    console.log("button re render")

 return <button onClick={onClick}>{children}</button>
})
function WillItReRender() {
    const [count, setCount] = useState(0)
    const refCount = useRef(count)
    refCount.current = count
    const onshow=useCallback(()=>{
        console.log("re render",refCount)
    },[])
  return (
    <div>
        <input type="text" value={count} onChange={()=>setCount((prev)=>prev+1)}></input>
        <Button onClick={onshow}>show</Button>
    </div>
  )
}

export default WillItReRender