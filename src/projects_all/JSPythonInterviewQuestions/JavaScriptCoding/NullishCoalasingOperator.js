// nulllish coalescing operator

// helps u to fallback to a default value if the value is null or undefined

//earlier we used logical or operarot

// var name1 = "srikanth"
// var fallback = name1 || "fallback name"
// console.log(fallback) // srikanth

//example 2

// var name1 = null || undefined
// var fallback = name1 || "fallback name"
// console.log(fallback) // fallback name

// this workd perfwectly fine the logical or operato expects a string value which returns if it is false it fallbacks to coe

//example 3
var name1 = "";
var fallback = name1 || "fallback name";
console.log(fallback); // fallback name

//above code to this

var name1 = "";
var fallback = name1 ?? "fallback name"; // nullish coallase oprator
console.log(fallback); // ""

var name1 = 0;
var fallback = name1 || "fallback name";
console.log(fallback); // fallback name

// this to this

var name1 = 0;
var fallback = name1 ?? "fallback name";
console.log(fallback); //0

// empty string and 0,undefined,null,-0,false considered to be false value so fallback code executes

// to avoid this we use nullish coalising value - it evealutes only to null or undefined
