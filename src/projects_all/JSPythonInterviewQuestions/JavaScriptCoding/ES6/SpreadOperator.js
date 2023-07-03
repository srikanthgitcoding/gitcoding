function fn(a,b,c){
    return a+b+c
}


var list =[1,2,3]

console.log(fn(...list))


//objects
var obj = {
    name : "srikanth",
    lastName : "mothkuri"
}

function objCheck(a){
    console.log(a,b)
}

objCheck(...obj)

//

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }