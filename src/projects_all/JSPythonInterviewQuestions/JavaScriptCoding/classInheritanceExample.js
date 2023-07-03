class User{
    constructor(username,email,password){
        this.username= username,
        this.email = email,
        this.password = password

    }
    register(){
        return `${this.username} is registerd`
    }
}

class Member extends User{
    
    getName(){
        console.log(this.register())
    }
}
let obj = new Member("srikanth","email","123")
obj.getName()


