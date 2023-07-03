function cartesian(arr1, arr2){
    const parentArray = []
for(i in A){
    const subArray = []
    for(j in B){
        parentArray.push([A[i],B[j]])
    }
}
return parentArray
}
let A = [1,2]
let B = [3,4,5]
console.log(cartesian(...A,...B)) //[[2,4],[2,5],[3,4],[3,5]]

// time complexity is O(mn) - since A is n and b is m  n*m times 