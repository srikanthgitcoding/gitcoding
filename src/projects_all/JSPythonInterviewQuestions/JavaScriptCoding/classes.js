class A{
    constructor(sName){
        this.studentName = sName 
    }
    student(){
        return "srikanth"
    }
    static Sta(a){
        return "checking" + a
    }
}

class B extends A{
    constructor(name){
        super()
        this.name = name
    }

    getName(){
        console.log("---", super.student())
    }
}

b = new B('f')
b.getName()
// a = new A('sree')
// console.log(a.getName())
// console.log(A.Sta("sss"))