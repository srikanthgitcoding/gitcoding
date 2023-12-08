//LINK: https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
//1. No arguments object in arrow functions


function functionDeclaration(){
console.log(arguments)// {"0":"srikanth","1":"mothkuri","2":"manisha"}
//access each element - arguments[0 or 1 or 2]
}

functionDeclaration("srikanth","mothkuri","manisha")

//But this object does not exist in arrow functions. Let's try it out. Say we have print using an arrow function:


const arrowFunction =()=>{
console.log("arrow", arguments)
}

//arrowFunction("srikanth","mothkuri","manisha")
//// Uncaught ReferenceError: arguments is not defined


//2. Arrow functions do not create their own this binding

const functionDeclarationOBj = {
    name:"srikanth",
    getName(){
        console.log(this) // this in getName method points to functionDeclarationOBj
        // this.name - returns srikanth since it points to functionDeclarationOBj

    }
}

functionDeclarationOBj.getName()

const arrowFunctionOBj = {
    name:"srikanth",
    getName:()=>{
        console.log(this) // this points to window object
        // this.name - returns undefined since it points to windoe object
    }
}

arrowFunctionOBj.getName()

//3. Arrow functions cannot be used as constructors

class Animal{
    constructor(name,age){
this.name = name,
this.age = age
    }

    getName(){
        return this.name
    }
}

const objectRef= new Animal("donkey",12)
console.log(objectRef.getName())

class Animal1{
    // constructor = (name, numOfLegs) => {
    //     this.name = name
    //     this.numOfLegs = numOfLegs
    //   }
    // this code gives error
    getName(){
        return this.name
    }
}

const objectRef1= new Animal1("donkey",12)
console.log(objectRef1.getName())

//however, what can be done is 

class Animal2{
    constructor(name,age){
        this.name=name,
        this.age=age
    }

    getName =()=>{
        return this
    }
}

const objrefff = new Animal2("money",12)
console.log(objrefff.getName())

//5 Arrow functions cannot be accessed before initialization
fdeclarion() // works
function fdeclarion(){}
arr() // doenst work
const arr =()=>{

}