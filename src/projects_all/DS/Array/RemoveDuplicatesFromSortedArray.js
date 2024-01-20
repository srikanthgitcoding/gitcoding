
function sortedArray(arr,n){
    const temp = []
    let j= 0
    for(i=0;i<n-1;i++){
        if(arr[i] !== arr[i+1]){
            temp[j] = arr[i]
            j++
        }
    }
    temp[j] = arr[i]
    return temp
}
var arr =[0,1,1,2,2,3,3,3,4,4,4,4,5]

console.log(sortedArray(arr,arr.length))