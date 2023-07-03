// function fn(f,s,t){
//     this.fi = f
//     this.se = s
//     this.th = t
//     this.GetProperties = function(){
//         console.log(`the properties ${this.fi} ${this.se} ${this.th} ${this.name}`)
//     }
// }
// fn.prototype.name ="srikanth"

// var a = new fn('first',"second","third")
// var b = new fn('first1',"second2","third3")

// a.GetProperties()
// b.GetProperties()


function fn(name){
    this.name = name
}

fn.prototype.getName = function(){
    console.log(this.name)
}

// # advantage of tis no matter how many objects u create functions are loaded only once in memory

var a = new fn("srikanth")
a.getName()
var b = new fn("mothkuri")
b.getName()

// b.getName = function(){
//     console.log(this.name) 
// }

b.getName()
