var arr =["sri","kant","th","mot","kuri"]

//#1
for (var i=0; i< arr.length; i++){
    console.log(arr[i])
}
//#2
for (item of arr){
    console.log("value",item)
}

// #3
arr.map((item)=>{console.log("-",item)})

arr.forEach((item,index)=>{
    
})