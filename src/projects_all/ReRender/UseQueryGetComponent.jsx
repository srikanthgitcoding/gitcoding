import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import PostCall from "./PostCall";
import useQueryGet from "./useQueryGet";

export default function UseQueryGetComponent() {
  const [dataFromDjango, setdataFromDjango] = useState("");
  const firstName = useRef("");

  const firstNameSet = (e) => {
    firstName.current = e.target.value;
  };

  const submitFn = async (e) => {
    e.preventDefault();
    let test = firstName.current;
    let url = `http://127.0.0.1:8000/store/productDetails/${test}`;
    const data = await axios.get(url);
    setdataFromDjango(data.data);
  };

  return (
    <div>
      data is - {dataFromDjango?.title}
      <form onSubmit={submitFn}>
        <input type="text" ref={firstName} onChange={firstNameSet} />
        <button type="submit">submit</button>
      </form>
      {/* <button onClick={refetch}>click me</button> */}
    </div>
  );
}
