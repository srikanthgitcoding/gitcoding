// creating an an inteface
interface Parent {
    x : string,
    y : string
}

// creating an inteface which has same values like Test or extend parnet
//extends
interface Children extends Parent {
    z : string
}
const Child : Children = {
    x : "x",
    y : "y",
    z : "z"

}

//implemets
class Test implements Children {
    x = "x"
    y = "y"
    z = "z"
}

console.log(Child)


// create type 
type Parent1 = {
    x : string,
    y : string
} 
//extend it  using &
type Children1 = Parent1 & {
    z : string
}
// assign values
const child1 : Children1 = {
    x : "x",
    y : "y",
    z : "z"
}
// impelenmts
class Sample1 implements Children1 {
    x = "x"
    y = "y"
    z = "z"
}


// interms of code safety both works same 

// differnece between types and intefaces
// declaration merging only supported by inteface  - DM is the key reason for using interfaces
//ineterface 1
interface request {
    data1 : string
}
// inteface 2
interface request {
    data2 : string
}
// it merges both
function handle(req : request){
    req.data1 // here it merges both data and shows data2 & data2
} 

// types
// any thing u can pt in type u can put in a type alias

type inputProps = {
    type : 'text' | 'email',
    value : string;
    onChange : (newValue:string) =>void
}

// u can create type aliases to above code like this
// intefaces doesnt have aliases in primitive typesand unioins supports by type aliases 

type inputType = 'text' | 'email' // unions
type inputValue = string // primitives
type inputOnChange = (newValue:string) =>void // shorthand functions

type inputProps1 = {
    type : inputType
    value : inputValue
    onChange : inputOnChange
}


type inputProps2 = {
    type : inputType
    value : inputValue
    names : {}[] // array of objects 
}

//   support  type                      |   interface 

// unions                               |    Declaration merging
// primitives                           |    Familiarity & u can write shorthand functions in interface
// sharthand functions
// advanced type functions 
//descrimanted unions

//--------------------------------------------------------------------------------------------------
// TypeScript allows interfaces to have hybrid types, i.e. 
// interfaces can have a combination of properties, function declarations, indexer and methods. 
// This flexibility is allowed to get aligned with JavaScript dynamic nature.

// Interface X types
// when building application use types
// when building library use interface

interface Foo {
    (x: number, y: number): number; // anonymous
    namedMethod: (z: string, w: string) => string; // named
    randomNumber: number
}

const foo2 = ((x: number, y: number) => x+ y + 1) as Foo;
foo2.namedMethod = (z: string, w: string) => z;
foo2.randomNumber = 4
console.log(foo2(1, 3)); // prints 5
console.log(foo2.namedMethod('hello', 'world')); // prints 'hello'
console.log(foo2.randomNumber); // prints 4

export interface NodeWithCompleteProperties {
    transaction: { [key: string]: string };
    basket: { id: string; [key: string]: string };
}

const data : NodeWithCompleteProperties = {
    transaction : {"s" : "sss"},
    basket : {id : "1", "kanth" : "kanth"}
}

const data1 : NodeWithCompleteProperties = {
    transaction : { 1 : "sss"},
    basket : {id : "1", "kanth" : "kanth"}
}


console.log(data)

interface person {
    name:string,
    lat: string,
}

interface persons extends Array<person>{}

type personsType = person[];


type arr = string[]
type arr1 = Array<string>

type familyMemebers = "MOM" | "DAD"
type familyMemberDetails = "name" 
type families = {
    famili1 : {
        [key in familyMemebers]: {
            [key in familyMemberDetails] : string | number
        }
    }
}


const f:families ={
    famili1:{
        "MOM":{
            "name":""
        },
        "DAD":{
            "name":""
        }
    }
}

