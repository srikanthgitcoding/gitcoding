import React, { useState,createContext, useEffect, useCallback } from "react";
import A from "./A";
import APIExamples from "./APIExamples";
import WillItReRender from "./WillItReRender";

export const MyContext = createContext({terminalName:""})
function IndexM() {
  const [count,setCount] =useState(0)
  const [list, setList] = useState([])

  const getName =useCallback(()=>{
    console.log("getname fn set")
    // setList((prev)=>{[...prev, count]})
  },[setList])

  useEffect(()=>{
    
    console.log("getName changed")
  },[getName])
  return (
    <div>
    {/* <MyContext.Provider  value={{terminalName:"Vopak"}}>
      <A></A>
      </MyContext.Provider> */}
      count is - {count}<br/>
      <button onClick={()=>setCount((prev)=>prev + 1)}>increase count</button>
      {/* <WillItReRender></WillItReRender> */}
      
    </div>
  );
}

export default IndexM;
