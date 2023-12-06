missingNumber(array,n){
    //code here
    let sum = array.reduce((acc,currentValue)=>{
     return acc + currentValue   
    },0)
    let count  = 0
    for(let i =1; i<=n;i++){
        count +=i
    }
    
    return count - sum
  
}