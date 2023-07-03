var p1  = new Promise((resolve,reject) => {
    resolve("p1 succesfull")
})

var p2  = new Promise((resolve,reject) => {
    resolve("p2 succesfull")
})


var p3  = new Promise((resolve,reject) => {
    reject("p3 rejected")
})


Promise.all([
    p1,
    p2,
    p3
]).then(msg => {
    console.log(msg)
}).catch(msg => {
    console.log(msg)
})