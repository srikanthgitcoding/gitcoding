function binarySearchRecursive(arr,target){
return search(arr,target,0,arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex){
if(leftIndex > rightIndex){
    return -1
}
let midIndex = Math.floor((leftIndex + rightIndex)/2)
if(target == midIndex){
    return midIndex
}
if(target < midIndex){
    return search(arr, target,leftIndex,midIndex-1)
}
else{
    return search(arr, target,midIndex+1,rightIndex)
}
}

console.log(binarySearchRecursive([11,12,13,14,15,16,17,18,19],12))