var arr = ["banana","apple","banana"]

const obj1 = {}
for(let i=0; i<arr.length; i++){
    if(arr[i] in obj1){
        obj1[arr[i]] +=1
    }else obj1[arr[i]] =1
}

console.log(obj1) // { banana: 2 }

let obj = arr.reduce((accumulator,currentValue)=>{
return {...accumulator,[currentValue] : (accumulator[currentValue] ?? 0) +1 }
},{})

