import React from "react";

const UseCallBackExample2 = ({ arrayList, setarrayListCallback }) => {
  console.log("use callback example 2", arrayList);
  return (
    <div>
      <button onClick={setarrayListCallback}>add new items</button>
      {arrayList.length &&
        arrayList.map((item) => {
          return (
            <div>
              <div>{item}</div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(UseCallBackExample2);
