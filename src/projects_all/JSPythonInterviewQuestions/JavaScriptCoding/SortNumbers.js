var arr=[1,3,42,3,2,12,2,2,21,1,10,0,111]
var new_arr = []

while (arr.length > 0){
    max = arr[0]
    let indexMax = 0
    for(let i=0; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
            indexMax = i
        }
    }
    new_arr.push(max)
    arr.splice(indexMax,1)
    
}


console.log(new_arr)



var arr=[1,3,42,3,2,12,2,2,21,1,10,0,111]



