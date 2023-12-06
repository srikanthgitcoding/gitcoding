const { default: axios } = require("axios")
const { default: fetch } = require("node-fetch")

const ReactComponent =()=>{
    const multiplicationBy5 = 5
    const multiplicationBy10 = 10
    const multiplicationBy2 = 2
    
    const useMemo = function(callbackFN){
        const cache = {}
        return async (number)=>{
            if(cache[number]) {
                console.log("data store in cache", cache[number])
                return cache[number] 
            } 
           const result =  await callbackFN(number)
           cache[number]  = result
           console.log("data not store in cache",cache)

           return result
        }
        
    }

    async function usemMoeCallBackFN(number){
        return await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`).then(data=>data.json())
    }

    const useMmemoResult = useMemo(usemMoeCallBackFN)
    console.log(useMmemoResult(5))
    setTimeout(()=>{
        console.log(useMmemoResult(5))

    },2000)


}

ReactComponent()