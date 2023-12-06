// var arr =[1,2,3,4,6,7,8]

// Array.prototype.myFilterMethod =function(){
// var filterArray = []
// for(let i=0; i<this.length; i++){
//     logicFunction1(this[i],filterArray)
// }
// return filterArray
// }

// function logicFunction1(e,filterArray){
//     if(e > 5) filterArray.push(e)
     
// }

// console.log(arr.myFilterMethod())

// the above code works absolutly fine but can be written this way as well 


var arr =[1,2,3,4,6,7,8]

Array.prototype.myFilterMethod =function(callback){
var filterArray = []
for(let i=0; i<this.length; i++){
    if(callback(this[i]))
        filterArray.push(this[i])
}
return filterArray
}

function logicFunction1(e){
    return e> 5
     
}

console.log(arr.myFilterMethod(logicFunction1))