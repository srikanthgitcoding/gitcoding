import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import UseCallBackExample2 from "./UseCallBackExample2";

const UseCallBackExample1 = () => {
  console.log("use callback example 1");

  const [count, setCount] = useState(0);
  const [arrayList, setarrayList] = useState(["sri"]);
  const setarrayListCallback = useCallback(() => {
    console.log(arrayList);
    setarrayList((prev) => [...prev, "justNew"]);
  }, [arrayList]);
  return (
    <div>
      useCallBackExample1
      <button onClick={() => setCount(count + 1)}>
        increase count - {count}
      </button>
      <button onClick={() => setarrayList((prev) => [...prev, "increase"])}>
        increase button count
      </button>
      <UseCallBackExample2
        arrayList={arrayList}
        setarrayListCallback={setarrayListCallback}
      />
    </div>
  );
};

export default React.memo(UseCallBackExample1)
