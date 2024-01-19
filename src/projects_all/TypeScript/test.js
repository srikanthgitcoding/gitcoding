function BinarySearchWithoutRecursive(arr,target,startIndex,endIndex){
    if(!arr.length)return -1
    if(!(startIndex > endIndex)){
      let middleIndex = Math.floor((startIndex +endIndex)/2)
      let middleIndexVlaue = arr[middleIndex]
      if(middleIndexVlaue == target) return middleIndex
      if(middleIndexVlaue > target) return BinarySearchWithoutRecursive(arr,target,startIndex,middleIndex-1)
      else return BinarySearchWithoutRecursive(arr,target,middleIndex+1,endIndex)

    }
    return -1
}
var arr = [10,11,12,14,15,16]

console.log(BinarySearchWithoutRecursive(arr,10,0,arr.length-1))