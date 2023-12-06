var variable1 ;

if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
    let variable2 = variable1;
}


//shorthand

const variable2 = variable1 || "new"
// if variable1 is false then print new

console.log(variable2)

if ({}){
    console.log("empty object")
}


var a; // undefined (falsy value)
var b = null; // null (falsy value)
var c = undefined; //undefined (falsy value)
var d = 4; // number (NOT falsy)
var e = 'five'; // assigment short circuits before reaching here

var f = a || b || c || d || e;




//------------------------------------------------


// Longhand:

let dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
} else {
  dbHost = 'localhost';
}

// const dbHost = process.env.DB_HOST || 'localhost';


//---------------------------------------------------

var emptyString = "" //returns fasly value

var zeroNumber = 0 // return falsy value
var oneNumber = 1 // returns truthy value
var minuszeroNumber = -0 // return falsy value

var undefineCheck; // return falsy value
var undefineCheck1 = undefined // // return falsy value
var nullCheck = null // // return falsy value

var obj = {} // if(obj) gives truthy value  //Object.keys(obj).length gives false value

if(obj){ // this always returns truthy value irrespective of empty object,{} or with keys,{key:1}
    console.log("this gets executed")
}else console.log("empty")

if(Object.keys(obj).length){
    console.log("if length is not zero this gets excuted")
}else{
    console.log("if length is  zero this gets excuted")

}
//array
var arr = [] // if(arr) gives truthy value //arr.length gives false value since it is zero
// Array.isArray(emptyArray) && emptyArray.length
var arr1 = [1]

console.log(!!arr1.length)

if(Object.keys(obj).length){
  console.log("empty array")
}else{
  console.log("non empty array")
}