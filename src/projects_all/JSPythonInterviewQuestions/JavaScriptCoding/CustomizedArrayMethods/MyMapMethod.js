// Array.prototype.myMap = function(callback) {
//     let newArray = [];
//     let x = this.length;
//     for (let i = 0; i < x; i++) {
//       let counter = callback(this[i]);
//       newArray.push(counter);
//     }
//     return newArray;
//   };
  
//   let arr = [1, 2, 3]
//   arr = arr.myMap(new1);
  

//   const new1 =(e)=>e  * 2


 



const logicFunction=(e,index)=>{
    return {pencil:e.pencil *20,sugar : e.sugar * 30, rice: e.rice * 52 }
}

Array.prototype.MyOwnMapFunction= function(logicFunction){
    var newArr = []
    for(let i=0;i<this.length; i++){
        newArr.push(logicFunction(this[i],i))
    }
    return newArr
}

var arr =[
    {
    pencil:1,
    sugar:2,
    rice:50
    }
]
const result = arr.MyOwnMapFunction(logicFunction)


 console.log("result", result)


















