class User{
    
    constructor(username,email,password){
        //define class properties
        this.userName = username, 
        this.email = email,
        this.password = password

    }
    register(){
        console.log(`${this.userName} registerdd`)
    }
    static getUserName(){
        console.log("name")
    }
}

let obj = new User("srikanth","123@gmail.com", "12345")
let obj1 = new User("monkey","123@gmail.com", "12345")
obj.register()
obj1.register()

User.getUserName()

