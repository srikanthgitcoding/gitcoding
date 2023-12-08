function a(x){
    return function(y){
        return function(z){
            return x+y+z
        }
    }
}
console.log(a(10)(20)(30)) 


