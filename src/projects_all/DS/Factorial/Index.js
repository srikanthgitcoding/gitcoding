// function Factorail(n){
//     let total = 1
//     for(let i=1;i<n;i++){
//         total*=i
//     }
//     return total
// }
var total = 1
function Factorail(n){
    if(n==1){
        return total
    }
    total *=  n
    return Factorail(n-1)
}
console.log(Factorail(6))