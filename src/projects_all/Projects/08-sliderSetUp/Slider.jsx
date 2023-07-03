import React, { useEffect, useState } from 'react'
import SliderData from './SliderData'
import data1 from './data'

function Slider() {
    const [data, setData] = useState(data1)
    const [active, setActive] = useState(0)
    let lengthOf = data.length - 1
    const gotoPrevOrnExt = (currentValue) =>{
        if( currentValue > lengthOf){
            return 0
        }
        if( currentValue < 0){
            return lengthOf
        }
        return currentValue
    }
    const getNextObject = () =>{
        let newValue = active + 1
        
        setActive(gotoPrevOrnExt(newValue))
    }

    const getPrevObject = () =>{
        let newValue = active - 1
        setActive(gotoPrevOrnExt(newValue))
    }
    useEffect(() => {
        let index = 0
      let interval = setInterval(()=>{
        index += 1
        console.log("setInterval", index)
        getNextObject()
      },1000)

      return ()=>clearInterval(interval) //mandatory code
    }, [active])
    
    const {id,title} = data[active]
    const style2={
        style1 :{
            diplay :"flex"
        }
    }
  return (
    <div className={style2.style1}>
        <div><button onClick={getPrevObject}>prev</button></div>
        <div><SliderData title={title}></SliderData></div>
       <div><button onClick={getNextObject}>Next</button></div> 

    </div>
  )
}

export default Slider