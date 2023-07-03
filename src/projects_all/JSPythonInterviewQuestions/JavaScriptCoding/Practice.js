// function quickSort(arr){
//     let arrlenth = arr.length
//     if(arrlenth < 2){
//         return arr
//     }
//     left = []
//     right = []
//     pivot = arr[arrlenth - 1]
//     for(let i=0;i<arrlenth-1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// let arr =[8,20,-2,4,-6,30]

// console.log(quickSort(arr))

var arr = [10,2,3,1,1,1,1,2,22,2,2,2,2]

frequntNumber = arr[0]
maxTimesExist = 1
obj = {}
for(i in arr){
    if(arr[i] in obj){
        obj[arr[i]] += 1
        if(obj[arr[i]] > maxTimesExist) {
            maxTimesExist = obj[arr[i]]; 
            frequntNumber = arr[i]
        }
        
    }else{
        obj[arr[i]] = 1
    }
}
console.log(frequntNumber,maxTimesExist)
