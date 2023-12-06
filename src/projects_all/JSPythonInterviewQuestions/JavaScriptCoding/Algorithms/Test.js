function LinearSearch(arr,t){
let startIndex = 0
let endIndex = arr.length - 1
if(arr.length === 0){
    return -1
}
let middleIndex = Math.floor(arr.length/2)
if(arr[middleIndex] == t){
    return middleIndex
}

if(arr[middleIndex] > t){
    LinearSearch(arr.slice(startIndex,middleIndex+1),t)
}else{
    LinearSearch(arr.slice(middleIndex,endIndex+1),t)

}


}


arr = [1,2,3,4,5,6,7,8]

console.log(LinearSearch(arr,8))