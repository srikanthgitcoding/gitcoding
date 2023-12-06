//Factory function  naming is camel case  oneTwoThree 
//Pascal case OneTwoThree 


function factoryFunction(radius){
    return {
        radius,
        draw() {
            console.log(radius)
        }
    }
}

function FnConstructor(radius){
    this.raduis = radius
    this.draw = function(){

    }
}
const n = new FnConstructor(9) // here it create new object x = {} and returns this

// u can use any way both r correct only there is no specific usage here 

