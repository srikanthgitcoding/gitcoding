// missingNumber(array,n){
//     //code here
//     let sum = array.reduce((acc,currentValue)=>{
//      return acc + currentValue   
//     },0)
//     let count  = 0
//     for(let i =1; i<=n;i++){
//         count +=i
//     }
    
//     return count - sum
  
// }

var arr1 =[1,2,3,4,5,6,7,8,10]
var totalCount = 0
var arrCount = 0
for(let i=arr1[0];i<arr1.length;i++){
    totalCount+=arr1[i]
    arrCount+=i
}

console.log(totalCount-arrCount)