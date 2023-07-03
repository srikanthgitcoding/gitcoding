// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.


var person1= {name :"srikanth"}


function fn(greet){
    return greet + this.name 
}


fn.call(person1,"Hello")

var arr =["Hello"]
console.log(fn.apply(person1,arr))

var fun = fn.bind(person1) 

console.log(fun("----"))

