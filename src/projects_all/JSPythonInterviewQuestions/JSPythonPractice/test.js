//1
// for(let i=0; i<10;i++){
//     var s = ""
//     for(let j=0; j<10;j++){
//         s +=String.fromCharCode(65 + i)
//     }
//     console.log(s)
// }
//2
// for(let i=0; i<10;i++){
//     var s = ""
//     for(let j=0; j<10;j++){
//         s +=String.fromCharCode(97 + i)
//     }
//     console.log(s)
// }
//3
// for(let i=0; i<10;i++){
//     var s = ""
//     for(let j=0; j<10;j++){
//         s +=String.fromCharCode(65 + j)
//     }
//     console.log(s)
// }
//4
// for(let i=10; i>0;i--){
//     var s = ""
//     for(let j=10; j>0;j--){
//         s += i
//     }
//     console.log(s)
// }

function QuickSort(arr){
    var arrlength = arr.length
    if(arrlength < 2) return arr
    left = []
    right = []
    pivot =arr[arrlength - 1]
    for(let i=0; i<arrlength - 1; i++){
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])

    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}

arr = [1,7,3,2,9]

console.log(QuickSort(arr))
