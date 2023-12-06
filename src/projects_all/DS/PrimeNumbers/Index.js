function PrimeNumbers(start,end){
    let arr = []
    for(let j=start;j<=end; j++){
        let count = 0
        for(let i=2;i <j; i++){
            if(j !== i && j % i == 0){
                count += 1
            }
        }
        if(count == 0){
            arr.push(start) 
        }

    }
    return arr

}

console.log(PrimeNumbers(2,100))