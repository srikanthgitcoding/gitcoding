// way1  --- In JavaScript, arrays use numbered indexes.  


var list = ["name", "srikanrh"]

var list2 = new Array("1", "2", "3")


for (var i=0; i < list2.length ; i++){
    console.log(list2[i])
}


// Accesing Array Elements

console.log(list2[0])

console.log(list2[list2.length -1])

// convert array to string

var fruits = ["Banana", "Orange", "Apple", "Mango"];

var f = fruits.join('')
console.log("---", f, typeof(f))


for (let i in fruits){
    console.log("--", i)
}
