let firstname = "srikanth"
let lastname = "mothkuri"
const person = {
    firstname : firstname,
    lastname : lastname,
    person : function (){
        return this.firstname + this.lastname
    }
}

// change the above object like this
let name1 = "key"
const person1 = {
    [name1] : "value", // dynamic name here
    firstname,
    lastname,
    person(){
        return this.firstname + this.lastname
    }
}
