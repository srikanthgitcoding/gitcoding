function BinarySearch(arr,targetElemnet,startIndex,endIndex){
    if(!arr.length)return 0
    if(arr.length === 1) return arr[0] === targetElement ? 0 : -1
    while(startIndex <= endIndex){
        console.log(startIndex,endIndex)
        let midIndex = Math.floor((startIndex + endIndex)/2)
        if(arr[midIndex] === targetElement) return midIndex
        if(arr[midIndex] > targetElement){
            endIndex = midIndex-1
        }else{
            startIndex = midIndex+1
        }
    }
    return -1

}
var arr = [10,11,12,13,14,15,16,17]
var targetElement = 1
console.log(BinarySearch(arr,targetElement,0,arr.length-1))