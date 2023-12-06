function memorizeCal(){
    const cache = {}
    let result =0
    return (n)=>{
        if(cache[n]) return cache[n]
        for(let i=0;i<n;i++){
            result +=6
        }
        cache[n]=result
        return result
    }
  
}

const mm = memorizeCal()
console.log(mm(900000000))
console.log(mm(900000000))
console.log(mm(900000000))