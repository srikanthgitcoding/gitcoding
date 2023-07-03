import React, { useState, useCallback, useEffect } from "react";
import B from "./B";

function A() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(["srikanth"]);
  const [first, setfirst] = useState(0);

  const lazyFunction = () => {
    setTimeout(() => {
      setfirst(first + 1);
    }, 3000);
  };
  const modifyUserData = useCallback(() => {
    console.log("modifyUserData");
    let l = userData.length + 1;
    setUserData([...userData, "new item" + l]);
  }, [userData]);

  useEffect(() => {
    //lazyFunction();
  }, [userData]);

  const testButton = (e) => (a) => {
    console.log("e", "test", e, a);
  };

  return (
    <div>
      <B userData={userData} modifyUserData={modifyUserData}></B>
      <div>
        count - {count}
        <button onClick={() => setCount(count + 1)}>count</button>
        <button onClick={() => testButton("testing")}>testing......</button>
      </div>
      first - {first}
    </div>
  );
}

export default A;
