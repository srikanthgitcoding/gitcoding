interface Person{
 name:string,
     lname:string,
     age:number,
     getName:(name:string)=>string
}
type p2 = Person
let Person :Person ={} as Person

// rather this use readonly mapped type


type p3 = Readonly<Person>

type no= Readonly<Person>




