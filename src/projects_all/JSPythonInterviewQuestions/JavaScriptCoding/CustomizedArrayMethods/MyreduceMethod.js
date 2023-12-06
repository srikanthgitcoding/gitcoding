var arr = [
    {
        name:"srikanth",score:87
    },
    {
        name:"manisha",score:95
    },
    {
        name:"pathan",score:20
    }
]


Array.prototype.MyReduceMethod =function(callbackFunction,initalValue){
        let total =initalValue
    for(let i=0; i <this.length;i++){
        total = callbackFunction(total,this[i],i,this)
        }
        return total
}

function reducerlogicFunction(prevValue,currentValue,currentIndex,arr){
     (currentValue > 75) ? prevValue.push(currentValue):null
     return prevValue
}

const result = arr.MyReduceMethod(reducerlogicFunction,[])
console.log("result",result)