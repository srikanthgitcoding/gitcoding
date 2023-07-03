class User{
    constructor(){

    }

    static caluculateNumbers(){
        return 2+2
    }
}

console.log(User.caluculateNumbers())
let obj = new User()
console.log(obj.caluculateNumbers()) //TypeError: obj.caluculateNumbers is not a function