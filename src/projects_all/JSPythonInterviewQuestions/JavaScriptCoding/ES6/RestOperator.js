//Using function
function fn(...args){
    for(let i of args){
        console.log(i)
    }
}
// using Es6 
const check=(...names) =>{
    for (let i of names){
        console.log(i)
    }
}
fn(1,2,3,4,5)
check("sr","a","a","a")