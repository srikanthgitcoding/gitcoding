const memorizeCalculatedData =()=>{
    const cache = {}
    let result = 1
    return (number)=>{
        if(number in cache){
            console.log("cache data", result)
            return result
        }
        for(let i=1;i<number;i++){
            result +=1
        }
        cache[number] = result
        return result
    }
    // line number 4 to 15 is a closure
}

const calculateData =()=>{
    const m = memorizeCalculatedData()
    console.log(m(1000))
    console.log(m(1000))
}

calculateData()
calculateData()
calculateData()
calculateData()






