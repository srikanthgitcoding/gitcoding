
var arr = [1, 2, 2, 2, 5, 7, 9];

// search if 8 persist

// arr.indexOf(8) > -1 // returns true if persist else false
// arr.push(10)
// arr.unshift(0)
// arr.splice(20,0,"srikanth");
// // console.log(arr)

// const a =arr.map(item=>{
//     console.log("--",item)
//     return item
// })
// var a11 = "10"
// console.log("aa", a11, typeof(+a11))

var x = 2
const result = arr.reduce((accumulate,value)=>{
    if(value <= x){
        accumulate.push(value)
    }
    return accumulate
},[])
console.log(result.length)