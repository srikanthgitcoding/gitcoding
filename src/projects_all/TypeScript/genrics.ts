function identity<T>(input:T):T{
return input
}
type Obj ={name:string}
type arr =string[]


identity<string>("23")
identity<number>(23)
identity<Obj>({name:""})

identity<arr>([""])

// example 2


function fc<T extends string|number,K>(fname:T,age:K):T{
return fname
}

fc("",2)
fc<string,number>("",2)


const af=<T>(fname:T):T=>{
    return fname
}


interface fname<T>{
    fname:T
}
interface lname<T>{
    fname:T
}

interface fullName<T extends Record<string,string>, L extends Record<string,string>>{

}

let ful:fullName<fname,string>={}

//example 3
interface Error{
    err:string,
    isError:boolean
}

type callBackfn<T,K=Error> = (e:T,r:K) => void

let cb :callBackfn<string>


const apiOne = {
    get<TResponse>(uri:string,cb:callBackfn<TResponse>){

    },
    get1 :()=>{

    }
} 

apiOne.get<string>("somestring","data")

interface ITankAllocation{
    tankNumber:number,
    tankId:number,
    tankStatus:string,
    orderId:string
}
function fn(data:Readonly<Omit<ITankAllocation,"orderId">>){
    data.tankId

}
const obj:Omit<ITankAllocation,"orderId"> = {
    tankNumber:1,
    tankId:1,
    tankStatus:""
}
fn(obj)


type details<T extends string | number>= {name:T}