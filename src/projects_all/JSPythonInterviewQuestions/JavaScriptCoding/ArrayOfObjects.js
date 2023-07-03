var arr =[
    {
       events:[
          "work",
          "touched tree",
          "pizza",
          "running",
          "television"
       ],
       squirrel:false
    },
    {
       events:[
          "work",
          "ice cream",
          "cauliflower",
          "lasagna",
          "touched tree",
          "brushed teeth"
       ],
       squirrel:false
    },
    {
       events:[
          "weekend",
          "cycling",
          "break",
          "peanuts",
          "beer"
       ],
       squirrel:true
    }
 ]

 arr.map((current) => {
    for (newarr in current){
        var newArr = current[newarr]
        if (Array.isArray(newArr)){
            newArr.map((i) =>{
                console.log(i)
            })
        }else{
            console.log(newarr)
        }    
    }
 })

 var obj = {
   names : {
      "first" : "srikanth",
      "last" : {
         "firstLast" :"mothkuri"
      }
   }
 }

 function fn(obj1){
   if(typeof obj1 === 'object' && obj1 !== null){
      
   }

 }

 fn(obj)