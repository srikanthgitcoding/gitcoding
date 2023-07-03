//#1

// function fn(){

// var a,b;
// a=10;
// b =20;

// }
// fn()

// console.log(a,b) // ReferenceError:a is not defind and  b is not defined

//#2

// function fn1(){
// var a=1,b;
// b=20

// }

// fn1()
// console.log(b) // ReferenceError:a is not defind and  b is not defined


//#3

function fn2(){
    var a=b=c=20 // a is local variable and b and c are global
    console.log(a,b,c)
    
    }
    
fn2()
console.log(a,b,c) //ReferenceError: a is not defined and b and c acceseble