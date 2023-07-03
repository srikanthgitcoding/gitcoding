// function myFunction(val, callback){
//     if(val == 1){
//         callback(true);
//     }else{
//         callback(false);
//     }
// }

// myFunction(0, 
// //the true or false are passed from callback() 
// //is getting here as bool
// // the anonymous function below defines the functionality of the callback
// function (bool){
//     if(bool){
//         alert("do stuff for when value is true");
//     }else {
//         //this condition is satisfied as 0 passed
//         alert("do stuff for when value is false");
//     }
// });


function fn(a,callback){
    if (a==1){
        callback(true)
    }
    else{
        callback(false)
    }
}



fn(1,function(rv){
    if(rv){
        console.log("true")
    }else{
        console.log("FALSE")
    }
})




