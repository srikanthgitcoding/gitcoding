interface Iterminals{
    terminalName:string,
    terminalEmail:string,
}

let termianls:Iterminals[] = [{terminalName:"a", terminalEmail:"a"},{terminalName:"b", terminalEmail:"b"}]  

interface IProducts{
    productName:string,
    productEmail:string,
}

let products:IProducts[] = [{productName:"a", productEmail:"a"},{productName:"b", productEmail:"b"}]  

interface Itanks{
    tankName:string,
    tankEmail:string,
}

let tanks:Itanks[] = [{tankName:"a", tankEmail:"a"},{tankName:"b", tankEmail:"b"}]  

function fn<T extends {}>(arr:Array<T>, k:keyof T, value:string){

    return arr.map((item:T,index:number)=>{
        if( item[k]  === value ){
            return item
        }
        return 
    })
}

let result = fn<Iterminals>(termianls,"terminalName","a")
let result1 = fn<IProducts>(products,"productName","a")

console.log("test",result1)



type cars = string[]
type cars1 = Readonly<Array<string>>
let carslet :cars1 = ["",""]






