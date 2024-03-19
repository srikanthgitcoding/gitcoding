import React from "react";
import { useState } from "react";

const TernaryOperatorIssue = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      {data.length ? "data exists" : null}
      {data.length && "data exists"}
      {0 && "data exists"}
      {NAN && "data exists"}
      {undefined && "data exists"}
      {null && "data exists"}
      {"" && "data exists"}
      {data.length > 0 && "data exists"}
      {!!data.length && "data exists"}
      {/* two exclamatory marks it converts value to boolean if it is zero false else true */}

      {/* sometimes u may not need to add null in that case use 
      1)in line 2,  && operartor, if first part is 0 it evaluvates and returns 0 it doesnt go to next value
      if it is truthy value it goes second part and returns "data exists"
      
      2) 
      */}
    </div>
  );
};

export default TernaryOperatorIssue;

// case 1

// var data = []
// data && "Hi" // Hi
// data.length && "Hi" // if length is zero it returns 0

//case 2

// var data = [1,2,3]
// data && "Hi" // Hi
// data.length && "Hi" // Hi

// case 3  data = [1,2]
//data.length ? "exist" :"doesnt" // exist

// case 4 data = []
//data.length ? "exist" :"doesnt" // doesnt

// with && operator
// case 5 // 0 && "sss" -> 0
// case 6 // NaN && "data exists" -> NaN
// case 6 // undefined && "data exists" -> undefined
// case 7 // null && "data exists" -> null
// case 7 // "" && "data exists" -> ""
// case 8 // / 1 && "sss" -> 1

// case 8 // / [] && "sss" -> sss
// case 8 // / {} && "sss" -> sss

// INSTEAD USE

// !!0 && "sss" => false
// !!NaN && "data exists" => false
// !!undefined && "data exists" => false
