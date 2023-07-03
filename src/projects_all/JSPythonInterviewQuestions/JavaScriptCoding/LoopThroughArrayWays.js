var arr =[1,2,3,4,5,6]

//#1
for (var i=0; i< arr.length; i++){
    console.log(arr[i])
}
//#2
for (i of arr){
    console.log(i)
}

// #3
arr.map((i)=>{console.log("-",i)})

arr.forEach((value,index)=>{
    
})