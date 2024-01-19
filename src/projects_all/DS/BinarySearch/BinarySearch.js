
function Binary(arr,t,start,end){
    console.log(start,end)

    if(arr.length == 0){
        return -1
    }
    if(arr.length == 1){
        if(arr[0] == t){
            return 0
        }
        return -1 
    }

    let startIndex = start
    let endIndex = end

    let middleIndex = Math.floor((startIndex + endIndex)/2)
    if(arr[middleIndex] === t){
        return middleIndex
    }
    

    if(arr[middleIndex] > t){
        return Binary(arr,t,startIndex, middleIndex-1)
    }else{
        return Binary(arr,t,middleIndex+1,endIndex)
    }
}


let arr =[10,11]

console.log(Binary(arr,13,0,arr.length-1))