const prevValues = []
function memorization(n){
    if(prevValues[n]){
        return prevValues[n]
    }
    let result = 0
    for(let i=1; i<n;i++){
        for(let j=1;j<n;j++){
            result+=1
        }
    }
    prevValues[n] = result
    return result
}


console.log(memorization(30000))
console.log(memorization(30000))

console.log(memorization(30000))


