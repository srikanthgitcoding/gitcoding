var array_list = [10,20,20,20,301,2,3,4,4,5,5,5,9]

new_dict = {}

// for (var i=0; i<array_list.length; i++){
//     if(array_list[i] in new_dict){
//         new_dict[array_list[i]] += 1 
//     }else{
//         new_dict[array_list[i]] = 1
//     }
// }

// console.log(new_dict)
var occ = {}
array_list.forEach((value,index,arr)=>{
    if(value in occ){
        occ[value] += 1 
    }else{
        occ[value] = 1 

    }
})

console.log(occ)