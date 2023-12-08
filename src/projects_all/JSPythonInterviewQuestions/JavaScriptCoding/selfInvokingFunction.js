// regular function or function declararion
// self invoking function doesnt have a name
//
(function(){
console.log("self invoking")
})();

console.log(function(){
    console.log("ss")
}())


// using  we will declare a self-executing anonymous function

(()=>{console.log("anonymous self invoking function")})()

//--------Anonymous Functions vs Named Functions vs Arrow Functions-------------------------------------------------------

//This is a named function, aka a function declaration
function brag(count) {
    return("I can do " + count + " pushups");
} 

console.log(brag(3))


//This is an anonymous function, aka a function expression
var brag = function(count) {
     return("I can do " + count + " pushups");
} 

console.log(brag(3)) // I can do 3 pushups

//This is an arrow function, a special type of function expression.
var brag = (count) => ("I can do " + count + " pushups");

console.log(brag(3)) // I can do 3 pushups
// why do we need anonymous functions
setTimeout(function(){

},200) // inside setTimeout method the callback function is anonymous it doenst need a nmae
var arr = [1,2,3,4]
arr.map(function(item,value){
console.log("--", item)
})
// refer to this doc 
// https://dev.to/mathlete/anonymous-functions-vs-named-functions-vs-arrow-functions-57pm