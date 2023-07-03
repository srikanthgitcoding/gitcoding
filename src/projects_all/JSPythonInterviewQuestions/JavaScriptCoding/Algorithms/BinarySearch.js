function binarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while(leftIndex <= rightIndex){
        let midIndex = Math.floor((leftIndex + rightIndex)/2)
        if(arr[midIndex] == target){
            return midIndex
        }
        if(target < arr[midIndex]){
            rightIndex = midIndex -1
        }else{
            leftIndex = midIndex + 1
        }
    } 
    // if it comes here whivh means eleemnt is not found
    return -1

}

console.log(binarySearch([11,12,13,14,15,16,17,18,19],19))