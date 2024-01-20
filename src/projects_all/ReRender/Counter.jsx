import React from "react";
import { useState } from "react";

const Counter = () => {
  console.log("counter component");
  const [count, setCount] = useState(0);
  const [countBy5, setCountBy5] = useState(0);
  const increaseCounter = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCountBy5((prev) => prev + 5);
    }, 100);
  };
  return (
    <div>
      counter - {count}
      <button onClick={increaseCounter}>click button</button>
      counter by 5- {countBy5}
      <button onClick={increaseCounter}>click button</button>
    </div>
  );
};

export default Counter;
