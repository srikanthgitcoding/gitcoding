interface IProduct{
    pName:string,
    pID:string
}

interface IItems{
    ItemName:string,
    ItemID:string
}

const productsvalues :IProduct ={
    pName:"",
    pID:""
}
const itemvalues :IItems ={
    ItemName:"",
    ItemID:"",
}
function products<T>(obj :T):T{
    return obj
}


products<IProduct>(productsvalues)



function fn111<T extends {}>(obj:Array<T>):Array<T>{
return [...obj]
}
fn111<IProduct>([...productsvalues])