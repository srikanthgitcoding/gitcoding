import React from "react";
import { useState } from "react";
import ChildrenC from "./ChildrenC";

const Parent = ({ children }) => {
  console.log("parent Component render");
  const [count, setCount] = useState(0);
  const [names, setNames] = useState("");
  const newFunction = () => {
    console.log("new function");
  };
  return (
    <div>
      Parent
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setNames("new sikanth")}>add names</button>
      {children}
    </div>
  );
};

export default Parent;
