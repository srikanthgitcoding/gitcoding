let array1 =[
    '2', '3', '1', '1',
    '2', '4', '2', '0',
    '1', '1'
  ]
let jumps = 0

function fn(arr){
    jumps++
    console.log("jump insides",jumps)
    let firstElement = arr[0]
    if(firstElement == 0){
        return jumps
    }
    if(firstElement >= arr.length){
        return jumps
    }
    let newArray = arr.slice(firstElement)
    if(newArray.length <= 1){
        return jumps
        
   }

    return fn(newArray)
}



console.log("jumps", fn(array1))