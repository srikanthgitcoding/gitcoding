console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


function sum(a,b){
    if(arguments.length == 2){
        return arguments[0] + arguments[1]
    }
    else{
        return function(b){
            return a + b
        }
    }
}