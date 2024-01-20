import React from "react";
import { useState, useEffect } from "react";
import ChildrenC from "./ChildrenC";
import ColorBox from "./ColorBox";
// import Counter from "./counter";
import DropDownChallange from "./DropDownChallange";
import Parent from "./Parent";
import UseCallBackExample1 from "./UseCallBackExample1";
import { useCounter } from "./Counter";
import Counter from "./Counter";
import useQueryGet from "./useQueryGet";
import { QueryClient, QueryClientProvider } from "react-query";
import UseQueryGetComponent from "./UseQueryGetComponent";

function ReRenderIndex() {
  // const [count, setCount] = useState(0);
  // const [newCounter, setNewCounter] = useCounter(0);

  // useEffect(() => {
  //   console.log("use effect 1");
  //   setCount(count + 5);
  // }, []);

  // useEffect(() => {
  //   console.log("use effect 2");
  //   setNewCounter();
  //   setCount((prev) => prev + 15);
  // }, []);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>grand parent {count}</button>
      <button onClick={() => setNewCounter()}>
        hooks upadfre - {newCounter}
      </button> */}
      {/* <Parent>
        <ChildrenC />
      </Parent> */}
      {/* <UseCallBackExample1 />  */}
      {/* <DropDownChallange /> */}
      {/* <ColorBox></ColorBox> */}
      <UseQueryGetComponent />
    </div>
  );
}

export default ReRenderIndex;
