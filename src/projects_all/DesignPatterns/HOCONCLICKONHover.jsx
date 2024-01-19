import React,{useState} from 'react'

const  OnclickExample= ({count,increamentCount}) => {
  return (
    <div>
    {count}
      <button onClick={increamentCount}>clike me</button>
    </div>
  )
}

const  OnHoverExample= ({count,increamentCount}) => {
  return (
    <div>
    {count}
      <button onMouseOver={increamentCount}>clike me</button>
    </div>
  )
}


const HOCComponent =(NewComponent,incrementBy)=>{
  const NewComp =()=>{
    const [count, setCount] = useState(0)
    const increamentCount=()=>{
        setCount(c=> c +incrementBy )
    }
    return <NewComponent count= {count} increamentCount={increamentCount} />
  }
  return NewComp
    
}

// export const EnhancedComp  = HOCComponent(OnclickExample)
export const EnhancedComp = ()=>{
     const EnhancedOnclick = HOCComponent(OnclickExample,5)
    const EnhancedOnMouse = HOCComponent(OnHoverExample,10)
    return (<div>
        <EnhancedOnclick/>
        <EnhancedOnMouse/>
    </div>
    )
}



