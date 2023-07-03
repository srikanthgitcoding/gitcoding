// ---------------------------------------
// Declaring and initializing two variables
    
var a = 0, b = 0;

// ---------------------------------------

var a = 'A';
var b = a;

// ...is equivalent to:

var a, b = a = 'A';

// ---------------------------------------

var x = y, y = 'A';
console.log(x + y); // undefinedA

var x = y // ReferenceError: y is not defined


//----------------------------------------------

var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!


//-----------------------------------------------------------------

'use strict';

var x = 0;
function f() {
  var x = y = 1; // Throws a ReferenceError in strict mode.
}
f();

console.log(x, y);

//-----------------------------------------------------------------------

console.log()
'use strict';
function foo() {
  var x = 1;  
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();

//----------------------------------------------------------------

function do_something() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
  }
  
  // ...is implicitly understood as:
  
  function do_something() {
    var bar;
    console.log(bar); // undefined
    bar = 111;
    console.log(bar); // 111
  }

  //----------------------------------------------------


    bla = 2;
    var bla;

    // ...is implicitly understood as:

    var bla;
    bla = 2;

//------------------------------------------------------------


function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2;
  }


//----------------------------------------------------------------

function fn(){
    var i = 10,j=20,k=30 // all local variables
    console.log(i,j,k)
}

fn()
console.log(i,j,k)


//------------------------------------------------------------------
