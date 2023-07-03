function fn(){
var arr = [1,2,3,4,4,5,5]
var noDuplicates = []
arr.forEach((item,index)=>{
if(!(noDuplicates.indexOf(item) >-1)){
    noDuplicates.push(item)
}
})
console.log(noDuplicates)

}

fn()