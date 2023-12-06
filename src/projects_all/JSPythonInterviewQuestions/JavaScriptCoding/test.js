var a; // undefined (falsy value)
var b = null; // null (falsy value)
var c = undefined; //undefined (falsy value)
var d = 0; // number (NOT falsy)
var e = 'five'; // assigment short circuits before reaching here

var f = a || b || c || d || e;

console.log(f)