var dupliactes = [10,20,20,20,301,2,3,4,4,5,5,5,9]

// var max = dupliactes[0]

// for (var i =0; i< dupliactes.length ; i++){
//     if (dupliactes[i] > max){  // make it < to get lowest number
//         max = dupliactes[i]
//     }else{

//     }
// }
// console.log(max)
var max = dupliactes[0] // u cant give zero here bcz min value it takes zero it self
dupliactes.forEach((value,index) =>{
    max = max > value ? value : max
})
console.log(max)