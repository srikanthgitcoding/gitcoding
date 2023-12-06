function quickSort(arr){
    let arrSize = arr.length
    if(arrSize < 2 ){
        return arr
    }

    let pivot = arr[arrSize -1]
    let leftArray = []
    let rightArray = []
 
    for(let i =0; i<arrSize-1;i++){
        if(arr[i] < pivot)leftArray.push(arr[i])
        else{rightArray.push(arr[i]);}
    }
return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}

var arr = [3,2,1,8,6]

console.log(quickSort(arr))