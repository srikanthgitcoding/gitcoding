const arr = [{
    a:1,
    b:2,
    c:3
}]
const calculate =((total, currentValue, currentIndex, arr)=>{
    console.log("total, currentValue, currentIndex, arr", 
    total, currentValue, currentIndex, arr)
})
arr.reduce(calculate)

