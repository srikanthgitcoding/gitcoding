// make optional fileds to mandatory using mapped types
type details ={
    name:string,
    age : number,
    lastName?:string
}

type removeOptional<T> = {
    [property in keyof T]-? : T[property]
}
//by using " -? " we add tha its a non optioanl field
type n = removeOptional<details>