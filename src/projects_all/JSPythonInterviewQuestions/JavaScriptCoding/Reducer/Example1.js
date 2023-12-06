
// Remove duplicates in an array

var arr = [1,2,3,4,5,1,2,3]


const noDuplicates = arr.reduce((accumulator,currentValue)=>{
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue)
    }
    return accumulator
},[])

console.log("noDuplicates",noDuplicates)