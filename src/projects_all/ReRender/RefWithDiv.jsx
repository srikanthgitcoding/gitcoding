import React, { useRef } from "react";

const Example = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <></>
        </div>
        <div ref={divContainer}> useRef is Awesome!</div>
      </form>
    </>
  );
};

export default Example;
