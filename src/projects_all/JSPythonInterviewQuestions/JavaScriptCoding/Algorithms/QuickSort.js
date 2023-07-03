// function QuickSort(arr){
// if(arr.length < 2){
//     return arr
// }    
// let pivot = arr[arr.length -1]
// let leftArray = []
// let rightArray = []
// for(let i in arr){
//     if(arr[i] < pivot){
//         leftArray.push(arr[i])
//     }else if(arr[i] > pivot){
//         rightArray.push(arr[i])
//     }
// }
// return [...QuickSort(rightArray),pivot,...QuickSort(leftArray)]
// }
//console.log(QuickSort([-6,20,8,-2,4]))

function normal(arr){
    newArr= []
    while(arr.length >= 1){
        max = arr[0]
        index = 0
            for(let i in arr){
                if(arr[i] < max){
                    max = arr[i]
                    index = i
                }
        }
        arr.splice(index,1)
        newArr.push(max)
    }
    return newArr
}

console.log(normal([-6,20,8,-2,4]))