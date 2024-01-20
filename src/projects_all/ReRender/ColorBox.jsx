import React, { useMemo } from "react";
import { useRef } from "react";
import { useState, useCallback } from "react";

const ColorBox = () => {
  const [inputValue, setInputValue] = useState("");

  const getColor = useMemo(() => {
    return {
      width: "100px",
      height: "200px",
      border: "1px solid",
      backgroundColor: `${inputValue}`,
    };
  }, [inputValue]);

  const setterFunction = (a) => e=>{
    console.log("a",e, a)
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div style={getColor}></div>
      <div>
        <input type="text" value={inputValue} onChange={()=>setterFunction(2)} />
      </div>
    </div>
  );
};

export default ColorBox;
