const arr = [1,2,3]
const calculate =((total, currentValue, currentIndex, arr)=>{
    console.log("total, currentValue, currentIndex, arr", 
    total, currentValue, currentIndex, arr)
})
arr.reduce(calculate,0)

