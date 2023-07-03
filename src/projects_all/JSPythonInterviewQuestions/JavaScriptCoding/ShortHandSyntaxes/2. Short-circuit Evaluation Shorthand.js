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

const dbHost = process.env.DB_HOST || 'localhost';


//---------------------------------------------------