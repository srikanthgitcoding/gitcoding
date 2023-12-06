
//3. Flatten an array of arrays
const twoDArr = [ [1,2], [3,4], [5,6], [7,8] , [9,10] ];


//result  - [1,2,3,4,5,6,7,8,9,10]
// let newArr = []
// twoDArr.forEach((currArr,index)=>{
//     currArr.forEach((element,index)=>{
//         newArr.push(element)
//     })
// })



// using reduce method 
const group = twoDArr.reduce((accumulator,currentValue)=>{
    return accumulator.concat(currentValue)
    
})

console.log(group)


